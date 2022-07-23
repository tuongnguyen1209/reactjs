import axiosClient from './axiosClient'

const authAPi = {
	login: (data) => axiosClient.post('/auth/login', data),
	register: (data) => axiosClient.post('/auth/signup', data),
}
export default authAPi
