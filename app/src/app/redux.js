import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AuthSlice from './slices/AuthSlice'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import CartReducer from './slices/CartSlice'
import ProductReducer from './slices/ProductSlice'

const rootReducer = combineReducers({
	auth: AuthSlice,
	cart: CartReducer,
	product: ProductReducer,
})

const storage = createWebStorage('local')

const persistConfig = {
	key: 'root',
	storage,
	rootReducer,
	whitelist: ['auth', 'cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
