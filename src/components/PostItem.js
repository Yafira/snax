import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const PostItem = ({ imgURL, title, link, description, tags, tagPage }) => (
	<section className={styles.card}>
		<Image
			unoptimized
			src={imgURL}
			responsive
			fill
			alt='snack'
			npm
			className={styles.imgWrap}
		/>

		<p>{description}</p>

		<div className={styles.tags}>
			{tags.map((tag, key) => {
				const tagText = tagPage ? tag.name : tag

				return (
					<Link key={key} href={`/tags/${tagText}`}>
						<h5>{tagText}</h5>
					</Link>
				)
			})}
		</div>
	</section>
)

export default PostItem
