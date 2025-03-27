import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../users'

type UsersResponse = User[]

export const usersApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: ['Users'],
	endpoints: (build) => ({
		getUsers: build.query<UsersResponse, void>({
			query: () => 'users',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Users' as const, id })), { type: 'Users', id: 'LIST' }]
					: [{ type: 'Users', id: 'LIST' }],
		}),
	}),
})

export const { useGetUsersQuery } = usersApi
