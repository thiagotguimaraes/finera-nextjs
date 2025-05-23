'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Post } from '@/lib/posts'
import { useState } from 'react'
import { CommentEditor } from './post-comment-input'
import { api, useAddCommentMutation } from '@/lib/services/comments'
import { useAppDispatch } from '@/lib/store/hooks'

const CreateComment = ({ post }: { post: Post }) => {
	const session = useSession()
	const status = session?.status
	const data = session?.data
	const user = data?.user

	const router = useRouter()
	const [canComment, setCanComment] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const authenticated = status === 'authenticated'

	const dispatch = useAppDispatch()
	const [addComment, { isLoading: isAdding }] = useAddCommentMutation()

	const showInput = () => {
		if (!authenticated) {
			router.push('/login')
		} else {
			setCanComment(authenticated)
			setIsEditing(true)
		}
	}

	const handleSubmit = async ({ name, body }) => {
		const newComment = await addComment({ name, email: user?.email, body, postId: post.id }).unwrap()

		/**
		 * This will update the cache data for the query corresponding to the `getPostComments` endpoint,
		 * when that endpoint is used with no argument post.id.
		 */
		const patchCollection = dispatch(
			api.util.updateQueryData('getPostComments', post.id, (draftComments) => {
				draftComments.unshift(newComment)
			})
		)
	}

	return (
		<div className='mt-5'>
			{!isEditing ? (
				<div>
					<Button onClick={showInput} disabled={isEditing}>
						Add comment
					</Button>
				</div>
			) : null}
			{canComment ? (
				<CommentEditor
					post={post}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					onSubmit={handleSubmit}
				></CommentEditor>
			) : null}
		</div>
	)
}

export default CreateComment
