export const formatPrice = (price) =>
	new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(price)
