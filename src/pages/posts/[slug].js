import ReactMarkdown from 'react-markdown'
import { getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion.js'

const Post = ({ post }) => (
	<section>
		<h2>{post.metadata.title}</h2>
		<span>{post.metadata.date}</span>
		<p>{post.metadata.tags.join(', ')}</p>
		<ReactMarkdown>{post.markdown}</ReactMarkdown>
	</section>
)

export const getStaticProps = async ({ params }) => {
	const post = await getSingleBlogPostBySlug(params.slug)
	return {
		props: {
			post,
		},
		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const posts = await getAllPublished()
	const paths = posts.map(({ slug }) => ({ params: { slug } }))
	return {
		paths,
		fallback: 'blocking',
	}
}

export default Post
