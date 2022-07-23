import { notification } from 'antd'
import productAPi from '../api/productAPi'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderApi from '../api/orders'

const initialState = {
	cart: [],
	isLoading: false,
}

export const CreateOrdersAction = createAsyncThunk(
	'cart/orders',
	async (data, { rejectWithValue }) => {
		const rs = await orderApi.create(data)
		if (rs.status === 'Success') {
			return rs
		} else {
			rejectWithValue()
		}
	}
)

const CartSlice = createSlice({
	initialState,
	name: 'cart',
	reducers: {
		reset: () => initialState,
		addToCart: (state, action) => {
			const { payload } = action
			let newCart = [...state.cart]
			const itemIndex = state.cart.findIndex((e) => e?.id === payload._id)

			if (itemIndex < 0) {
				newCart = [
					...newCart,
					{
						id: payload._id,
						item: payload,
						quantity: 1,
					},
				]
			}
			state.cart = newCart
		},
		changeQuantity: (state, action) => {
			const newCart = [...state.cart]
			const { id, quantity } = action.payload
			const itemIndex = state.cart.findIndex((e) => e?.id === id)
			if (itemIndex >= 0) {
				newCart[itemIndex].quantity = quantity
			}
			state.cart = newCart
		},
		removeItem: (state, action) => {
			const newCart = [...state.cart]
			const id = action.payload
			const itemIndex = state.cart.findIndex((e) => e?.id === id)
			if (itemIndex >= 0) {
				state.cart = newCart.filter((_, index) => index !== itemIndex)
			}
		},
	},
	extraReducers: {
		[CreateOrdersAction.pending.type]: (state) => {
			state.isLoading = true
		},
		[CreateOrdersAction.fulfilled.type]: (state) => {
			state.isLoading = false
			state.cart = []
			notification.success({
				message: 'Bạn đã đặt hàng thành công',
			})
		},
		[CreateOrdersAction.rejected.type]: (state) => {
			state.isLoading = false
		},
	},
})

export const cartAction = CartSlice.actions

const CartReducer = CartSlice.reducer
export default CartReducer
