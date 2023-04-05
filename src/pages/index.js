import Image from 'next/image'
import Link from 'next/link'
import { getAllPublished, getPostsByTag } from '../lib/notion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
	const data = await getAllPublished()
	await getPostsByTag('recommended')

	return {
		props: {
			posts: data,
		},
		revalidate: 60,
	}
}

export default function Home({ posts }) {
	return (
		<div className={styles.container}>
			<Header />
			<Footer />
		</div>
	)
}
