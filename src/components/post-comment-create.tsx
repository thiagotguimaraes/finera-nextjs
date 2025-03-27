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
		<>
			<div className='mt-10 mb-2'>
				<Button onClick={showInput} disabled={isEditing}>
					Create comment
				</Button>
			</div>
			{canComment ? (
				<CommentEditor post={post} isEditing={isEditing} setIsEditing={setIsEditing}></CommentEditor>
			) : null}
		</>
	)
}

export default CreateComment
