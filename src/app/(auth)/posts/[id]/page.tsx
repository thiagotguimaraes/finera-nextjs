import { notFound } from 'next/navigation'
import { API_URL, getPost, getPostComments, Post as PostType } from '@/lib/posts'
import Post from '@/components/post'
import Comment from '@/components/post-comment'
import CreateComment from '@/components/post-comment-create'

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	const posts = await fetch(`${API_URL}/posts`).then((res) => res.json())

	return posts.map((post: PostType) => ({
		id: post.id.toString(),
	}))
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const post = await getPost(id)

	if (!post || !Object.keys(post).length) {
		notFound()
	}

	const comments = await getPostComments(id)

	return (
		<Post post={post}>
			<p>Comments:</p>
			<ul className='comments'>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</ul>
			<CreateComment post={post} />
		</Post>
	)
}
