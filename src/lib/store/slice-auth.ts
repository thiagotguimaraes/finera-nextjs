import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'comments',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			return { value: state.value + 1 }
		},
		decrement: (state) => {
			return { value: state.value - 1 }
		},
		incrementByAmount: (state, action) => {
			return { value: state.value + action.payload }
		},
		initialize: (state, action) => {
			return { value: action.payload }
		},
	},
})

export const { increment, decrement, incrementByAmount, initialize } = authSlice.actions

export default authSlice.reducer
