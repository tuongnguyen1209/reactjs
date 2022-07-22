const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	isLogin: false,
	isLoading: false,
	userData: {},
}

const AuthSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		reset: () => initialState,
	},
})

export const authAction = AuthSlice.actions

const AuthReducer = AuthSlice.reducer
export default AuthReducer
