'use client'

import { Comment as CommentType, Post } from '@/lib/posts'
import CommentDeleteIcon from './post-comment-delete-icon'
import CommentEditIcon from './post-comment-edit-icon'
import { CommentEditor } from './post-comment-input'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { api, useAddCommentMutation, useUpdateCommentMutation } from '@/lib/services/comments'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { LoginState, selectLoginStatus } from '@/lib/store/auth-slice'

const Comment = ({ comment, post }: { comment: CommentType; post?: Post }) => {
	// const session = useSession()
	// const status = session?.status
	// const data = session?.data
	// const user = data?.user
	const status: LoginState['status'] = useAppSelector(selectLoginStatus)

	const authenticated = status === 'success' //status === 'authenticated'

	const [isEditing, setIsEditing] = useState<boolean>(false)

	const dispatch = useAppDispatch()
	const [updateComment, { isLoading: isUpdating }] = useUpdateCommentMutation()

	const handleSubmit = async ({ body }) => {
		const updatedComment = await updateComment({ ...comment, body }).unwrap()
		console.log('updatedComment', updatedComment)

		/**
		 * This will update the cache data for the query corresponding to the `getPostComments` endpoint,
		 * when that endpoint is used with no argument post.id.
		 */
		const patchCollection = dispatch(
			api.util.updateQueryData('getPostComments', post?.id ?? undefined, (draftComments) => {
				const index = draftComments.findIndex((item) => item.id === updatedComment.id)
				if (index !== -1) {
					draftComments[index] = { ...draftComments[index], ...updatedComment } // Preserve existing properties if needed
				}
			})
		)
	}

	return (
		<li className='grid grid-cols-12 mt-3 mb-7'>
			<div className='col-span-11'>
				<b>
					<i>{comment.email}</i>
				</b>
				{isEditing ? (
					<CommentEditor
						post={post}
						comment={comment}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						onSubmit={handleSubmit}
					></CommentEditor>
				) : (
					<p>{comment.body}</p>
				)}
			</div>
			{authenticated ? (
				<div className='col-span-1'>
					<CommentEditIcon setIsEditing={setIsEditing} />
					<CommentDeleteIcon comment={comment} post={post} />
				</div>
			) : null}
		</li>
	)
}

export default Comment
