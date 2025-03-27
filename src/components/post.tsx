import { Post as PostType } from '@/lib/posts'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

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
					<h2 className='text-lg font-bold mb-2 hover:underline'>{post.title}</h2>
					<p className='text-gray-600'>{post.body}</p>
				</div>
				{children}
			</CardContent>
		</Card>
	)
}
