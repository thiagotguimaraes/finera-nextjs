import { Comment as CommentType } from '@/lib/posts'

const Comment = ({ comment }: { comment: CommentType }) => (
	<li className='comment'>
		<p>
			<i>{comment.email}</i>
		</p>
		<b>{comment.name}</b>
		<p>{comment.body}</p>
	</li>
)

export default Comment
