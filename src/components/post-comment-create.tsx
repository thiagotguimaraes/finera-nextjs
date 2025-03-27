'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Post } from '@/lib/posts'
import { useState } from 'react'
import { CommentEditor } from './post-comment-input'

const CreateComment = ({ post }: { post: Post }) => {
	const session = useSession()
	const status = session?.status

	const router = useRouter()
	const [canComment, setCanComment] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const authenticated = status === 'authenticated'

	const showInput = () => {
		if (!authenticated) {
			router.push('/login')
		} else {
			setCanComment(authenticated)
			setIsEditing(true)
		}
	}

	return (
		<div className='mt-5'>
			{!isEditing ? (
				<div>
					<Button onClick={showInput} disabled={isEditing}>
						Add comment
					</Button>
				</div>
			) : null}
			{canComment ? (
				<CommentEditor post={post} isEditing={isEditing} setIsEditing={setIsEditing}></CommentEditor>
			) : null}
		</div>
	)
}

export default CreateComment
