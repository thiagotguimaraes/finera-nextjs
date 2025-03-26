import { notFound } from 'next/navigation'
import { Comment as CommentType, getPost, getPostComments } from '@/lib/posts'
import { Post } from '@/components/posts'

const Comment = ({ comment }: { comment: CommentType }) => (
	<li className='comment'>
		<p>
			<i>{comment.email}</i>
		</p>
		<b>{comment.name}</b>
		<p>{comment.body}</p>
	</li>
)

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
		</Post>
	)
}
