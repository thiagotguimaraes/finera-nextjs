import { Post as PostType } from '@/lib/posts'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Post({ post, children }: { post: PostType; children?: React.ReactNode }) {
	return (
		<Card key={post.id} className='hover:shadow-lg transition mb-5'>
			<CardContent className='p-4'>
				<div className='flex items-center space-x-3 mb-3'>
					<Avatar>
						<AvatarFallback>{`U${post.userId}`}</AvatarFallback>
					</Avatar>
					<span className='font-semibold'>{`User ${post.userId}`}</span>
				</div>
				<div className='block'>
					<div className='relative w-full rounded-lg overflow-hidden' style={{ paddingBottom: '100%' }}>
						<Image
							src={`${BASE_PATH}/posts-images/${post.imageSrc}`}
							alt=''
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<h2 className='text-lg font-bold mb-2 mt-4 hover:underline'>{post.title.toUpperCase()}</h2>
					<p className='text-gray-600'>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
				</div>
				{children}
			</CardContent>
		</Card>
	)
}
