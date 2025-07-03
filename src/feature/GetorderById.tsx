'use client'

import { useGetOrderById } from '~/shared/hooks/getorderbyid'

export const GetorderById = ({ orderValue }: { orderValue: string }) => {
	const { data, isLoading, isSuccess, isError } = useGetOrderById(orderValue)

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Не удалось загрузить заказ</div>

	return (
		<div>
			{isSuccess && (
				<>
					<div>{data.id}</div>
					<div>{data.sm_id}</div>
					<div>{data.customer_id}</div>
				</>
			)}
		</div>
	)
}
