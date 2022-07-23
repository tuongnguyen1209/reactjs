import { Route, Routes } from 'react-router-dom'
import AppHome from './AppHome'
import AppProduct from './AppProduct'
import AppProductDetail from './ProductDetail'

const Views = () => {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route index element={<AppHome />} />
					<Route path="/product" element={<AppProduct />} />
					<Route path="/product/:id" element={<AppProductDetail />} />
				</Route>
			</Routes>
		</>
	)
}

export default Views
