'use client'

import { Menu } from 'lucide-react'
import NavLink from './nav-link'
import SignoutButton from './signout-button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function NavHeader() {
	const [open, setOpen] = useState(false)
	// const session = useSession()
	// const status = session?.status
	const authenticated = true //status === 'authenticated'

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<header className='bg-white shadow-md py-4 px-6 flex justify-between items-center'>
			<nav className='hidden md:flex space-x-6'>
				<NavLink handleClose={() => {}} href='/posts' className='hover:text-blue-600 font-medium'>
					Feed
				</NavLink>
				<NavLink handleClose={() => {}} href='/users' className='hover:text-blue-600 font-medium'>
					Users
				</NavLink>
				<div className='absolute flex justify-between right-5'>
					{!authenticated ? (
						<NavLink handleClose={() => {}} href='/login' className='hover:text-blue-600 font-medium'>
							Login
						</NavLink>
					) : (
						<SignoutButton className='hover:text-blue-600 font-medium ml-5' />
					)}
				</div>
			</nav>

			{/* Mobile Sidebar Trigger */}
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<button className='md:hidden p-2'>
						<Menu size={24} />
					</button>
				</SheetTrigger>
				<SheetContent side='left' className='w-64 pl-5'>
					<nav className='flex flex-col space-y-4 mt-4'>
						<NavLink
							handleClose={handleClose}
							href='/posts'
							className='text-lg font-medium hover:text-blue-600'
						>
							Feed
						</NavLink>
						<NavLink
							handleClose={handleClose}
							href='/users'
							className='text-lg font-medium hover:text-blue-600'
						>
							Users
						</NavLink>
						<div className='absolute flex flex-col space-y-4 bottom-5'>
							{!authenticated ? (
								<NavLink
									handleClose={handleClose}
									href='/login'
									className='text-lg font-medium hover:text-blue-600'
								>
									Login
								</NavLink>
							) : (
								<SignoutButton className='text-lg font-medium hover:text-blue-600' />
							)}
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	)
}
