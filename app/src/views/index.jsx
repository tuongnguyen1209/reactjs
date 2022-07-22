import { Route, Routes } from 'react-router-dom'
import AppHome from './AppHome'
import AppProduct from './AppProduct'

const Views = () => {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route index element={<AppHome />} />
					<Route path="/product" element={<AppProduct />} />
				</Route>
			</Routes>
		</>
	)
}

export default Views
