import Logo from '../assets/snax-logo.png'
import Hbg from '../assets/header.jpg'
import Image from 'next/image'
import styles from '../styles/SnaxLogo.module.css'
import Link from 'next/link'

export default function SnaxLogo() {
	return (
		<div className={styles.Header}>
			<Link href='/'>
				<Image className={styles.logo} src={Logo} alt='logo' />
			</Link>
		</div>
	)
}
