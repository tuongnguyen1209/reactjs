import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/redux'
import Views from './views'

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Views />
				</BrowserRouter>
			</Provider>
		</>
	)
}
export default App
