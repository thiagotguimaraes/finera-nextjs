'use client'

import { Comment as CommentType, Post } from '@/lib/posts'
import { TrashIcon } from './icons'
import { Button } from './ui/button'
import { api, useDeleteCommentMutation } from '@/lib/services/comments'
import { useAppDispatch } from '@/lib/store/hooks'

const CommentDeleteIcon = ({ post, comment }: { comment: CommentType; post: Post }) => {
	const dispatch = useAppDispatch()
	const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation()

	const handleDelete = async () => {
		const delComment = await deleteComment(comment.id).unwrap()
		console.log('delComment', delComment)

		/**
		 * This will update the cache data for the query corresponding to the `getPostComments` endpoint,
		 * when that endpoint is used with no argument post.id.
		 */
		const patchCollection = dispatch(
			api.util.updateQueryData('getPostComments', post.id, (draftComments) =>
				draftComments.filter((item) => item.id !== comment.id)
			)
		)
	}

	return (
		<Button variant='ghost' onClick={handleDelete}>
			<TrashIcon />
		</Button>
	)
}

export default CommentDeleteIcon
