'use client'

import { Comment as CommentType, Post } from '@/lib/posts'
import CommentDeleteIcon from './post-comment-delete-icon'
import CommentEditIcon from './post-comment-edit-icon'
import { CommentEditor } from './post-comment-input'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const Comment = ({ comment, post }: { comment: CommentType; post: Post }) => {
	const session = useSession()
	const status = session?.status
	const authenticated = status === 'authenticated'

	const [isEditing, setIsEditing] = useState<boolean>(false)

	return (
		<li className='grid grid-cols-12 mt-3 mb-7'>
			<div className='col-span-11'>
				<b>
					<i>{comment.email}</i>
				</b>
				{isEditing ? (
					<CommentEditor
						post={post}
						comment={comment}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
					></CommentEditor>
				) : (
					<p>{comment.body}</p>
				)}
			</div>
			{authenticated ? (
				<div className='col-span-1'>
					<CommentEditIcon setIsEditing={setIsEditing} />
					<CommentDeleteIcon comment={comment} post={post} />
				</div>
			) : null}
		</li>
	)
}

export default Comment
