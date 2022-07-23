import categoryApi from '../api/Category'
import productAPi from '../api/productAPi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const initialState = {
	isLoading: false,
	products: [],
	categories: [],
}

export const GetListProductAction = createAsyncThunk(
	'product/getlist',
	async (params = {}, { rejectWithValue }) => {
		const rs = await productAPi.getAll(params)
		if (rs.status === 'Success') {
			return rs
		} else {
			rejectWithValue()
		}
	}
)

export const GetProductAction = createAsyncThunk(
	'product/getlist',
	async (id = '', { rejectWithValue }) => {
		const rs = await productAPi.getOne(id)
		if (rs.status === 'Success') {
			return rs
		} else {
			rejectWithValue()
		}
	}
)
export const GetListCategoryAction = createAsyncThunk(
	'product/getlistcate',
	async (_, { rejectWithValue }) => {
		const rs = await categoryApi.getall()
		if (rs.status === 'Success') {
			return rs
		} else {
			rejectWithValue()
		}
	}
)

const ProductSlice = createSlice({
	initialState,
	name: 'product',
	reducers: {
		reset: () => initialState,
	},
	extraReducers: {
		[GetListProductAction.pending.type]: (state) => {
			state.isloading = true
		},
		[GetListProductAction.fulfilled.type]: (state, action) => {
			state.isloading = false
			state.products = action.payload.data?.docs || []
		},
		[GetListProductAction.rejected.type]: (state) => {
			state.isloading = false
		},
		[GetListCategoryAction.fulfilled.type]: (state, action) => {
			state.categories = action.payload.data?.docs || []
		},
	},
})

export const productAction = ProductSlice.actions

const ProductReducer = ProductSlice.reducer
export default ProductReducer
