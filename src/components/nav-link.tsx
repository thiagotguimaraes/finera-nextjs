'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({
	href,
	className,
	handleClose,
	children,
}: {
	className: string
	href: string
	handleClose: Function
	children: React.ReactNode
}) {
	let path = usePathname()

	if (path === '/') path = '/posts'

	return (
		<Link
			onClick={() => handleClose()}
			href={href}
			className={`${className} ${path === href ? `text-blue-600` : ''}`}
		>
			{children}
		</Link>
	)
}
