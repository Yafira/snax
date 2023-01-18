import Logo from '../assets/snax-logo.png'
import Image from 'next/image'
import '../styles/Header.module.css'

export default function Header() {
	return (
		<div className='Header'>
			<Image className='logo' src={Logo} alt='logo' />
			<h1>Snax</h1>
			<p>Like a Pokedex but for vegan snacks</p>
		</div>
	)
}
