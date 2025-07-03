import { PropsWithChildren } from 'react'
import './button.scss'
export interface ButtonProps {
	click: () => void
}

export const Button = ({ children, click }: PropsWithChildren<ButtonProps>) => {
	return (
		<button className='button' onClick={click}>
			{children}
		</button>
	)
}
