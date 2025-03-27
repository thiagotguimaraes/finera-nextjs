import { Comment as CommentType } from '@/lib/posts'

const Comment = ({ comment }: { comment: CommentType }) => (
	<li className='comment'>
		<b>
			<i>{comment.email}</i>
		</b>
		<p>{comment.body}</p>
	</li>
)

export default Comment
