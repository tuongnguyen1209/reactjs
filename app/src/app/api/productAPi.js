import axiosClient from './axiosClient'

const productAPi = {
	getAll: (params) => {
		return axiosClient.get('/product', { params })
	},
	getOne: (id) => {
		return axiosClient.get(`/product/${id}`)
	},
}

export default productAPi
