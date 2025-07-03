'use client'
import { useState } from 'react'
import { GetorderById } from '~/feature/GetorderById'
import { Button } from '~/shared/ui/button/button'

export const OneOrder = () => {
	const [orderValue, setOrderValue] = useState('')
	const [inputValue, setInputValue] = useState('')

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder='id заказа'
			/>
			<Button click={() => setOrderValue(inputValue)}>Загрузить</Button>
			<GetorderById orderValue={orderValue} />
		</div>
	)
}
