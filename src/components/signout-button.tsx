'use client'

import { signOut } from 'next-auth/react'

export default function SignoutButton() {
	return (
		<button type='button' className='w-full cursor-pointer' onClick={() => signOut()}>
			Sign out
		</button>
	)
}
