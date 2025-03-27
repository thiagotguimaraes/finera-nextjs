'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useGetUsersQuery } from '@/lib/services/users'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export default function UsersList() {
	const { data = [], isLoading } = useGetUsersQuery()

	return (
		<div className='m-5'>
			{isLoading
				? [1, 2, 3].map((i) => (
						<div key={i} className='flex flex-col space-y-3 mt-10'>
							<Skeleton className='h-4 w-[150px]' />
							<div className='space-y-2'>
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
								<Skeleton className='h-4' />
							</div>
						</div>
				  ))
				: data.map((u) => (
						<Card key={u.id} className='transition mb-5 p-0'>
							<CardContent className='p-4'>
								<div className='flex items-center space-x-3 mb-3'>
									<Avatar>
										<AvatarFallback>{`U${u.id}`}</AvatarFallback>
									</Avatar>
									<h2 className='font-semibold'>{u.name}</h2>
								</div>
								<div className='block'>
									<h2 className='text-lg font-bold mb-2 hover:underline'>{`Email: ${u.email}`}</h2>
								</div>
							</CardContent>
						</Card>
				  ))}
		</div>
	)
}
