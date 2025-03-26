import { Post as PostType } from '@/lib/posts'

export default function Post({ post, children }: { post: PostType; children?: React.ReactNode }) {
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
