import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const queryClient = new QueryClient()

export const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
