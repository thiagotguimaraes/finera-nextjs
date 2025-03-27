import { user1 } from '@/lib/users'
import { type User, type Session } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

interface ExtendedSession extends Session {
	user: User
}

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	providers: [
		Credentials({
			credentials: { email: {}, password: {} },
			authorize: async ({ email, password }: any) => {
				return { email, password }
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
			}

			return token
		},
		async session({ session, token }: { session: ExtendedSession; token: any }) {
			if (session.user) {
				session.user.id = token.id as string
			}

			return session
		},
	},
}
