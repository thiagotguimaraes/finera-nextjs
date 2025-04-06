import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface LoginState {
	status: 'success' | 'failed' | 'invalid_data' | 'user_exists' | undefined
	previousUrl: string | undefined
}

const initialState: LoginState = {
	status: undefined,
	previousUrl: undefined,
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
		setPreviousUrl: (state, action: PayloadAction<{ previousUrl: LoginState['previousUrl'] }>) => {
			state.previousUrl = action.payload.previousUrl?.split('/finera-nextjs')[1]
		},
	},
})

export const { login, logout, setPreviousUrl } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoginStatus = (state: RootState) => state.auth.status
export const selectPreviousUrl = (state: RootState) => state.auth.previousUrl

export default authSlice.reducer
