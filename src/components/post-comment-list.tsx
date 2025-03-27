'use client'

import { Post } from '@/lib/posts'
import Comment from './post-comment'
import { useGetPostCommentsQuery } from '@/lib/services/comments'

const CommentsList = ({ post }: { post: Post }) => {
	const { data: comments = [], isLoading } = useGetPostCommentsQuery(post.id)

	// console.log('comments', comments, 'isLoading', isLoading, 'post', post)
	console.log('comments', comments)

	return (
		<>
			{isLoading ? (
				<p>Loading comments...</p>
			) : (
				<>
					<p>Comments:</p>
					<ul className='comments'>
						{comments.map((c) => (
							<Comment key={c.id} comment={c} />
						))}
					</ul>
				</>
			)}
		</>
	)
}

export default CommentsList
