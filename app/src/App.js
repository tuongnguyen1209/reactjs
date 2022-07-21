import React, { useEffect } from 'react'
import axiosClient from './app/api/axiosClient'

function App() {
	useEffect(() => {
		axiosClient.get('local').then((rs) => console.log('hi'))
	})
	return <div className="App">hello</div>
}
export default App
