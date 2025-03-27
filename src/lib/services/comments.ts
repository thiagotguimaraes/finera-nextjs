import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Comment {
	id: string
	postId: string
	name: string
	email: string
	body: string
}

type CommentsResponse = Comment[]

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: ['Comments'],
	endpoints: (build) => ({
		getComments: build.query<CommentsResponse, void>({
			query: () => 'comments',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Comments' as const, id })), { type: 'Comments', id: 'LIST' }]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		addComment: build.mutation<Comment, Partial<Comment>>({
			query: (body) => ({
				url: `comments`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
		}),
		getComment: build.query<Comment, string>({
			query: (id) => `comments/${id}`,
			providesTags: (result, error, id) => [{ type: 'Comments', id }],
		}),
		getPostComments: build.query<Comment[], string>({
			query: (id) => `posts/${id}/comments`,
			providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'Comments' as const, id }))] : []),
		}),
		updateComment: build.mutation<void, Pick<Comment, 'id'> & Partial<Comment>>({
			query: ({ id, ...patch }) => ({
				url: `comments/${id}`,
				method: 'PUT',
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Comments', id }],
		}),
		deleteComment: build.mutation<{ success: boolean; id: number }, number>({
			query(id) {
				return {
					url: `comments/${id}`,
					method: 'DELETE',
				}
			},
			invalidatesTags: (result, error, id) => [{ type: 'Comments', id }],
		}),
	}),
})

export const {
	useGetCommentQuery,
	useGetPostCommentsQuery,
	useGetCommentsQuery,
	useAddCommentMutation,
	useUpdateCommentMutation,
	useDeleteCommentMutation,
} = api
