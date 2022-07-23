import { AUTH_TOKEN } from 'src/constants/appConstants'
import authApi from '../api/authApi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const initialState = {
	isLogin: false,
	isLoading: false,
	userData: {},
}

export const LoginACtion = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
	const rs = await authApi.login(data)

	if (rs.status === 'Success') {
		return rs
	} else {
		rejectWithValue()
	}
})

export const SignupACtion = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {
	const rs = await authApi.register(data)

	if (rs.status === 'Success') {
		return rs
	} else {
		rejectWithValue()
	}
})

const AuthSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		reset: () => initialState,
		logout: () => {
			localStorage.removeItem(AUTH_TOKEN)
			return initialState
		},
	},
	extraReducers: {
		[LoginACtion.pending.type]: (state) => {
			state.isLoading = true
		},
		[LoginACtion.fulfilled.type]: (state, action) => {
			state.userData = action.payload.data?.user
			state.isLogin = true
			localStorage.setItem(AUTH_TOKEN, action.payload.data?.token)
			state.isLoading = false
		},
		[LoginACtion.rejected.type]: (state) => {
			state.isLoading = false
		},
		[SignupACtion.pending.type]: (state) => {
			state.isLoading = true
		},
		[SignupACtion.fulfilled.type]: (state, action) => {
			state.isLoading = false
		},
		[SignupACtion.rejected.type]: (state) => {
			state.isLoading = false
		},
	},
})

export const authAction = AuthSlice.actions

const AuthReducer = AuthSlice.reducer
export default AuthReducer
