'use client'

import { toast } from '@/components/toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { AuthForm } from '@/components/auth-form'
import { SubmitButton } from '@/components/submit-button'

import { login, LoginState, selectLoginStatus, selectPreviousUrl } from '@/lib/store/auth-slice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'

export default function Page() {
	const router = useRouter()

	const [email, setEmail] = useState('')
	const [isSuccessful, setIsSuccessful] = useState(false)

	const previousUrl: LoginState['previousUrl'] = useAppSelector(selectPreviousUrl)

	const status: LoginState['status'] = useAppSelector(selectLoginStatus)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (status === 'failed') {
			toast({
				type: 'error',
				description: 'Invalid credentials!',
			})
		} else if (status === 'invalid_data') {
			toast({
				type: 'error',
				description: 'Failed validating your submission!',
			})
		} else if (status === 'success') {
			setIsSuccessful(true)
			toast({
				type: 'success',
				description: 'Logged in successfully!',
			})

			if (previousUrl && new URL(previousUrl, window.location.origin).origin === window.location.origin) {
				router.push(previousUrl)
			} else {
				router.push('/')
			}
		}
	}, [status, router, previousUrl])

	const handleSubmit = (formData: FormData) => {
		setEmail(formData.get('email') as string)
		dispatch(login())
	}

	return (
		<div className='flex items-start pt-12 md:pt-0 md:items-center justify-center bg-background'>
			<div className='w-full mt-25 max-w-md overflow-hidden rounded-2xl flex flex-col gap-12'>
				<div className='flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16'>
					<h3 className='text-xl font-semibold dark:text-zinc-50'>Sign In</h3>
					<p className='text-sm text-gray-500 dark:text-zinc-400'>Use your email and password to sign in</p>
				</div>
				<AuthForm action={handleSubmit} defaultEmail={email}>
					<SubmitButton isSuccessful={isSuccessful}>Sign in</SubmitButton>
					<p className='text-center text-sm text-gray-600 mt-4 dark:text-zinc-400'>
						{"Don't have an account? "}
						<Link
							href='/register'
							className='font-semibold text-gray-800 hover:underline dark:text-zinc-200'
						>
							Sign up
						</Link>
						{' for free.'}
					</p>
				</AuthForm>
			</div>
		</div>
	)
}
