import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface LoginState {
	status: 'success' | 'failed' | 'invalid_data' | undefined
}

const initialState: LoginState = {
	status: undefined,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.status = 'success'
		},
		logout: (state) => {
			state.status = undefined
		},
	},
})

export const { login, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoginStatus = (state: RootState) => state.auth.status

export default authSlice.reducer
