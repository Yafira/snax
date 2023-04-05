import Logo from '../assets/snax-logo.png'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<div className={styles.Header}>
			<Image className={styles.logo} src={Logo} alt='logo' />
			<h1>Snax</h1>
			<p>Like a Pokedex but for vegan-friendly snacks and other finds</p>
			<h5>All snacks are consumed and reviewed by Yafira Martinez</h5>
		</div>
	)
}
