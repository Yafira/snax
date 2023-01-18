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
			<main className={styles.main}>
				{posts.map((post, index) => (
					<section key={index} className={styles.card}>
						<div>
							<h2>
								<Link
									href={`/posts/${post.slug}`}
									className={styles.action}
								></Link>
							</h2>
							<div>{post.date}</div>
						</div>
						<div id='columns'>
							<Image
								unoptimized
								src={post.image}
								width='300'
								height='300'
								alt='snack'
							/>
							<h3>{post.title}</h3>
							<h4>{post.rating}</h4>
							<p>{post.description}</p>
						</div>
					</section>
				))}
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
