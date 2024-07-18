import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { clsx } from 'clsx'

const PostItem = ({ imgURL, title, rating, description, tags, tagPage }) => (
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

		<div className={styles.division}>
			<h3>{title}</h3>

			<p>{description}</p>

			<h4>{rating}</h4>

			<div className={styles.tags}>
				{tags.map((tag, key) => {
					const tagText = tagPage ? tag.name : tag

					return (
						<Link key={key} href={`/tags/${tagText}`}>
							<div
								className={clsx({
									[styles.hrec]: tagText === 'highly recommended',
									[styles.rec]: tagText === 'recommended',
									[styles.outstanding]: tagText === 'outstanding',
									[styles.country]:
										tagText === 'dominican republic' || tagText === 'finland' || tagText === 'spain'
								})}
							>
								<h5>{tagText}</h5>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	</section>
)

export default PostItem
