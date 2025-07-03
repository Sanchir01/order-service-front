'use client'

import Image from 'next/image'
import { Button } from '~/shared/ui/button/button'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__wrapper}>
					<Image src='/logo.svg' alt='logo' width={40} height={40} />
					<nav className={styles.header__nav}>
						<ul className={styles.header__nav_list}>
							<li>Home</li>
							<li>About</li>
							<li>Catalog</li>
						</ul>
					</nav>
					<header className={styles.header__actions}>
						<Button click={() => alert('hello world')}>Test</Button>
					</header>
				</div>
			</div>
		</header>
	)
}
