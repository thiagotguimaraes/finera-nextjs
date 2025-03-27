import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'
import StoreProvider from '@/components/store-provider'
import './globals.css'
import NavHeader from '@/components/nav-header'

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
		<html lang='en' suppressHydrationWarning>
			<NavHeader />
			<body className='flex flex-col min-h-screen'>
				<StoreProvider>
					<SessionProvider basePath={`${process.env.BASE_PATH}/api/auth`}>
						<Toaster position='top-right' />
						{children}
					</SessionProvider>
				</StoreProvider>
			</body>
		</html>
	)
}
