import { PropsWithChildren } from 'react'

export interface ButtonProps {
	click: () => void
}

export const Button = ({ children, click }: PropsWithChildren<ButtonProps>) => {
	return <button onClick={click}>{children}</button>
}
