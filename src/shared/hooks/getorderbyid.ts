'use client'
import { useQuery } from '@tanstack/react-query'
import { orderService } from '../services/order.service'

export const useGetOrderById = (id: string) => {
	return useQuery({
		queryKey: ['order', id],
		queryFn: () => orderService.getOrdersById(id),
		enabled: !!id,
		select: data => data.Data
	})
}
