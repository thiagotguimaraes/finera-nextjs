'use server'

import { z } from 'zod'
import { createUser } from '@/lib/users'

const authFormSchema = z.object({
	email: z.string(), //.email(),
	password: z.string(), //.min(4),
})

export interface LoginActionState {
	status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data'
}

export const login = async (_: LoginActionState, formData: FormData): Promise<LoginActionState> => {
	try {
		return { status: 'success' }
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { status: 'invalid_data' }
		}

		return { status: 'failed' }
	}
}

export interface RegisterActionState {
	status: 'idle' | 'in_progress' | 'success' | 'failed' | 'user_exists' | 'invalid_data'
}

export const register = async (_: RegisterActionState, formData: FormData): Promise<RegisterActionState> => {
	try {
		return { status: 'success' }
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { status: 'invalid_data' }
		}

		return { status: 'failed' }
	}
}
