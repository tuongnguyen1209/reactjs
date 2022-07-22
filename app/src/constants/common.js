export const APP_BASE = '/'

export const ADMIN_BASE = '/admin'

export const AUTH_BASE = '/auth'

export const ROUTERS_BASE = {
	app_view: {
		home: APP_BASE,
		product: `/product`,
		productDetail: {
			path: `/product/:id`,
			link: (id) => `/product/${id}`,
		},
		myProfile: '/my_profile',
		orders: '/orders',
		checkout: '/checkout',
	},
	auth_view: {
		login: `${AUTH_BASE}/login`,
		signIn: `${AUTH_BASE}/signIn`,
	},
	admin_view: {
		home: ADMIN_BASE,
	},
}
