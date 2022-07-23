import { notification } from 'antd'
import axios from 'axios'
import { API_BASE_URL } from 'src/config/appConfig'
import { AUTH_TOKEN } from 'src/constants/appConstants'

const createAxios = () => {
	const instance = axios.create({
		baseURL: API_BASE_URL,
		headers: { 'content-type': 'application/json' },
	})

	instance.interceptors.request.use(
		(config) => {
			const token = localStorage.getItem(AUTH_TOKEN)
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	instance.interceptors.response.use(
		(response) => {
			if (response && response.data) {
				return response.data
			}
			return response
		},
		(error) => {
			console.log()
			notification.error({
				message: `Have some Error`,
				description: error.response.data?.message || error.message,
			})
			Promise.reject(error)
		}
	)

	return instance
}

export default createAxios()
