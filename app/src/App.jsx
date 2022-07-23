import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './app/redux'
import Views from './views'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)
function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<Views />
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</>
	)
}
export default App
