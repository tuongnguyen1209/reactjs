const { default: axiosClient } = require('./axiosClient')

const categoryApi = {
	getall: () => {
		return axiosClient.get('/category')
	},
}
export default categoryApi
