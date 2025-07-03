import { instance } from '../api/api'

export const orderService = {
	getOrdersById: async (id: string) => {
		console.log('id order', id)
		const response = await instance.get(`/order/${id}`)
		return response.data
	}
}
