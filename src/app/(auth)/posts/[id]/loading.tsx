import { Skeleton } from '@/components/ui/skeleton'

export default function PostLoading() {
	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-2xl p-6'>
				<div className='mt-5'>
					{[1, 2, 3].map((i) => (
						<div key={i} className='flex flex-col space-y-3 mt-10'>
							<Skeleton className='h-4 w-[150px]' />
							<div className='space-y-2'>
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
