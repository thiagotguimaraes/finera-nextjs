'use client'

import { Button } from './ui/button'
import { useRef, useState } from 'react'
import { Textarea } from './ui/textarea'
import { Post } from '@/lib/posts'
import { api, useAddCommentMutation } from '@/lib/services/comments'
import { useSession } from 'next-auth/react'
import { toast } from '@/components/toast'
import { useAppDispatch } from '@/lib/store/hooks'

export function CommentEditor({
	post,
	isEditing,
	setIsEditing,
}: {
	post: Post
	isEditing: boolean
	setIsEditing: Function
}) {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const [draftContent, setDraftContent] = useState<string>('')
	const session = useSession()
	const data = session?.data
	const user = data?.user

	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const [addComment, { isLoading: isAdding }] = useAddCommentMutation()
	const dispatch = useAppDispatch()

	const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDraftContent(event.target.value)
	}

	const handleSubmit = async ({ name, body }: { name: string; body: string }) => {
		try {
			const newComment = await addComment({ name, email: user?.email, body, postId: post.id }).unwrap()

			/**
			 * This will update the cache data for the query corresponding to the `getPostComments` endpoint,
			 * when that endpoint is used with no argument post.id.
			 */
			const patchCollection = dispatch(
				api.util.updateQueryData('getPostComments', post.id, (draftComments) => {
					draftComments.push(newComment)
				})
			)

			console.log('patchCollection', patchCollection)
		} catch (error) {
			toast({
				type: 'error',
				description: 'Error creating comment',
			})
			setIsSubmitting(false)
			console.log(error)
		} finally {
			toast({
				type: 'success',
				description: 'Comment created',
			})
			setIsEditing(false)
			setDraftContent('')
			setIsSubmitting(false)
		}
	}

	return (
		<>
			{isEditing ? (
				<div className='flex flex-col gap-2 w-full'>
					<Textarea
						data-testid='message-editor'
						ref={textareaRef}
						className='bg-transparent outline-none overflow-hidden resize-none !text-base rounded-xl w-full'
						value={draftContent}
						onChange={handleInput}
					/>

					<div className='flex flex-row gap-2 justify-end'>
						<Button
							variant='outline'
							className='h-fit py-2 px-3'
							onClick={() => {
								setIsEditing(false)
							}}
						>
							Cancel
						</Button>
						<Button
							data-testid='message-editor-send-button'
							variant='default'
							className='h-fit py-2 px-3'
							disabled={isSubmitting}
							onClick={async () => {
								setIsSubmitting(true)
								handleSubmit({ name: '', body: draftContent })
							}}
						>
							{isSubmitting ? 'Sending...' : 'Send'}
						</Button>
					</div>
				</div>
			) : null}
		</>
	)
}
