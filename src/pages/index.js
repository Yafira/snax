import Image from 'next/image'
import Link from 'next/link'
import { getAllPublished } from '../lib/notion'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
	if (!posts) return <h1>No posts</h1>

	return (
		<div className={styles.container}>
			<Header />
			<main className={`${styles.columns} ${styles.main}`}>
				{posts.map((post, index) => {
					console.log(post.image)
					return (
						<section key={index} className={styles.card}>
							<div>
								<h2>
									<Link href={`/posts/${post.slug}`}></Link>
								</h2>
								<div>{post.date}</div>
							</div>
							<div>
								<div className={styles.imgWrap}>
									<Image
										unoptimized
										src={post.image}
										responsive
										width={260}
										height={270}
										alt='snack'
									/>
								</div>

								<h3>{post.title}</h3>
								<h4>{post.rating}</h4>
								<p>{post.description}</p>
								<h5>{post.tags}</h5>
							</div>
						</section>
					)
				})}
			</main>
		</div>
	)
}

export const getStaticProps = async () => {
	const data = await getAllPublished()
	return {
		props: {
			posts: data,
		},
		revalidate: 60,
	}
}
