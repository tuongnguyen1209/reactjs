import { API_BASE_URL } from '@/config/appConfig'
import { AUTH_TOKEN } from '@/constants/appConstants'
import axios from 'axios'
import sweetalert2 from 'sweetalert2'

const createAxios = () => {
	const instance = axios.create({
		baseURL: API_BASE_URL,
		headers: { 'content-type': 'application/json' },
	})

	instance.interceptors.request.use(
		(config) => {
			const token = localStorage.getItem(AUTH_TOKEN)
			if (token) {
				config.headers['Authorization'] = token
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
			Promise.reject(error)
		}
	)

	return instance
}

export default createAxios()
