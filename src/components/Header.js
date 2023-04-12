import Logo from '../assets/snax-logo.png'
import Hbg from '../assets/header.jpg'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { bgWrap } from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
	return (
		<div className={styles.Header}>
			<div className={bgWrap}>
				<Image className={styles.hbg} src={Hbg} alt='header background image' />
			</div>

			<div className={styles.snaxBox}>
				<Image className={styles.logo} src={Logo} alt='logo' />
				<Link href='/'>
					<h1>Snax</h1>
				</Link>

				<p>Like a Pokedex but for vegan snacks and other finds</p>
				<h5>
					All snacks are consumed and reviewed by
					<Link href='https://yafira.dev'> Yafira ✿ </Link>
				</h5>
			</div>
		</div>
	)
}
