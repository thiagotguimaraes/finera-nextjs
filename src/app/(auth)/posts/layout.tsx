import NavHeader from '@/components/nav-header'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
	title: 'Finera Nextjs Posts Task',
	description: 'Finera Nextjs Posts Task',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<NavHeader />
			{children}
		</>
	)
}
