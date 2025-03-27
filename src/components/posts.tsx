import { Post as PostType } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'
import Post from './post'

export default function Posts({ posts }: { posts: PostType[] }) {
	if (!posts || posts.length === 0) {
		return <p>There are no posts yet.</p>
	}

	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-2xl p-6'>
				{posts.map((post: PostType) => (
					<Link key={post.id} href={`/posts/${post.id}`}>
						<Post post={post} />
					</Link>
				))}
			</div>
		</div>
	)
}
