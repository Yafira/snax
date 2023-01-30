import styles from '../styles/Footer.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
	return (
		<div className={styles.Footer}>
			<h3>
				Built and designed <FontAwesomeIcon className='icon' icon={faHeart} />{' '}
				by Yafira Martinez
			</h3>
		</div>
	)
}
