'use client'

import Link from 'next/link'

export function Post({ post, children }) {
	return (
		<article className='post'>
			<div className='post-content'>
				<header>
					<div>
						<h2>{post.title}</h2>
						<p>Shared by user {post.userId}</p>
					</div>
				</header>
				<p>{post.body}</p>
				<br />
				{children}
			</div>
		</article>
	)
}

export default function Posts({ posts }) {
	if (!posts || posts.length === 0) {
		return <p>There are no posts yet.</p>
	}

	return (
		<ul className='posts'>
			{posts.map((post) => (
				<Link key={post.id} href={`/posts/${post.id}`}>
					<li>
						<Post post={post} />
					</li>
				</Link>
			))}
		</ul>
	)
}
