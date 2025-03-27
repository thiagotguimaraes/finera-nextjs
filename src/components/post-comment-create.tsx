'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Post } from '@/lib/posts'

const CreateComment = ({ post }: { post: Post }) => {
	const session = useSession()
	const status = session?.status
	const data = session?.data
	const user = data?.user

	const router = useRouter()

	console.log('session', session, user, status)

	const showInput = () => {
		if (status != 'authenticated') router.push('/login')
	}

	return (
		<div className='mt-10'>
			<Button onClick={showInput}>Create comment</Button>
		</div>
	)
}

export default CreateComment
