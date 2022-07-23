import React from 'react'
import HeaderApp from 'src/components/layout/HeaderApp'

const AppLayout = ({ children }) => {
	return (
		<div>
			<HeaderApp />
			<div className="main-app">{children}</div>
			<footer />
		</div>
	)
}

export default AppLayout
