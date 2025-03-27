'use client'

import { Post } from '@/lib/posts'
import Comment from './post-comment'
import { useGetPostCommentsQuery } from '@/lib/services/comments'
import { Skeleton } from '@/components/ui/skeleton'

const CommentsList = ({ post }: { post: Post }) => {
	const { data: comments = [], isLoading } = useGetPostCommentsQuery(post.id)

	return (
		<>
			{isLoading ? (
				<div className='mt-5'>
					<hr className='my-6 border-gray-300' />
					{[1, 2, 3].map((i) => (
						<div key={i} className='flex flex-col space-y-3 mt-10'>
							<Skeleton className='h-4 w-[150px]' />
							<div className='space-y-2'>
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
							</div>
						</div>
					))}
				</div>
			) : (
				<>
					<hr className='my-6 border-gray-300' />
					<ul>
						{comments.map((c) => (
							<Comment key={c.id} comment={c} post={post} />
						))}
					</ul>
				</>
			)}
		</>
	)
}

export default CommentsList
