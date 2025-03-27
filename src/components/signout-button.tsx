'use client'

import { signOut } from 'next-auth/react'
import NavLink from './nav-link'

export default function SignoutButton({ className }: { className: string }) {
	return (
		<div className={`cursor-pointer`} onClick={() => signOut()}>
			<NavLink href='/' className={className}>
				Logout
			</NavLink>
		</div>
	)
}
