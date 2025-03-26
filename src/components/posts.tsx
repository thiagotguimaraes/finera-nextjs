import { Post as PostType } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'
import Post from './post'

export default function Posts({ posts }: { posts: PostType[] }) {
	if (!posts || posts.length === 0) {
		return <p>There are no posts yet.</p>
	}

	return (
		<ul className='posts'>
			{posts.map((post: PostType) => (
				<Link key={post.id} href={`/posts/${post.id}`}>
					<li>
						<Post post={post} />
					</li>
				</Link>
			))}
		</ul>
	)
}
