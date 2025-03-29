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
	// console.log('process.env.BASE_PATH', process.env.BASE_PATH)

	return (
		<StoreProvider>
			<html lang='en' suppressHydrationWarning>
				{/* <SessionProvider basePath={`${process.env.BASE_PATH}/api/auth`}> */}
				<NavHeader />
				<body className='flex flex-col min-h-screen'>
					<Toaster position='top-right' />
					{children}
				</body>
				{/* </SessionProvider> */}
			</html>
		</StoreProvider>
	)
}
