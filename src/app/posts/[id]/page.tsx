import Post from '@/components/post'
import CreateComment from '@/components/post-comment-create'
import CommentsList from '@/components/post-comment-list'
import { getImageFilename } from '@/lib/services/getImageFilename'
import { API_URL, getPost, Post as PostType } from '@/lib/posts'
import { notFound } from 'next/navigation'

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	const posts = await fetch(`${API_URL}/posts`).then((res) => res.json())

	return posts.map((post: PostType) => ({
		id: post.id.toString(),
	}))
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const posts = await fetch(`${API_URL}/posts`).then((res) => res.json())

	const { id } = await params
	let post = await getPost(id)

	const postIndex = posts.findIndex((p: PostType) => p.id === post.id)
	post = { ...post, imageSrc: getImageFilename(postIndex) }

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
