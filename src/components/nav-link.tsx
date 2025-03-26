'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
	let path = usePathname()

	if (path === '/') path = '/posts'

	return (
		<Link href={href} className={path === href ? `active` : ''}>
			{children}
		</Link>
	)
}
