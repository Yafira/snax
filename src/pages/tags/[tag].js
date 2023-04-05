import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPostsByTag } from '@/lib/notion'
import PostListTags from '@/components/PostListTags'
import styles from '@/styles/Home.module.css'

export async function getServerSideProps({ params }) {
	const res = await getPostsByTag(params.tag)
	const posts = res.results

	return {
		props: {
			posts,
		},
	}
}

const Tag = ({ posts }) => (
	<div className={styles.container}>
		<Header />
		<PostListTags posts={posts} />
		<Footer />
	</div>
)

export default Tag
