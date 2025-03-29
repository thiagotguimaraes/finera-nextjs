import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/comments'
import { usersApi } from '../services/users'
import { authSlice } from './auth-slice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			[usersApi.reducerPath]: usersApi.reducer,
			auth: authSlice.reducer,
		},
		// adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(usersApi.middleware),
	})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
