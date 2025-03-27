import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function PostsLoading() {
	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-2xl p-6'>
				{[1, 2, 3].map((i) => (
					<Card key={i} className='transition mb-5'>
						<CardContent className='p-4'>
							<div className='flex items-center space-x-3 mb-3'>
								<div className='flex items-center space-x-4'>
									<Skeleton className='h-12 w-12 rounded-full' />
									<div className='space-y-2'>
										<Skeleton className='h-4 w-[250px]' />
										<Skeleton className='h-4 w-[200px]' />
									</div>
								</div>
							</div>
							<div className='space-y-2'>
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
