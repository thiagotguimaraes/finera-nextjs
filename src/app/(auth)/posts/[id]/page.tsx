import { notFound } from 'next/navigation'
import { API_URL, getPost, Post as PostType } from '@/lib/posts'
import Post from '@/components/post'
import CreateComment from '@/components/post-comment-create'
import CommentsList from '@/components/post-comment-list'

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

	// const comments = await getPostComments(id)

	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-2xl p-6'>
				<Post post={post}>
					<CreateComment post={post} />
					<CommentsList post={post} />
				</Post>
			</div>
		</div>
	)
}
