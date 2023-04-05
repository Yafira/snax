import styles from '../styles/Home.module.css'
import PostItem from './PostItem'

export default function PostListIndex({ posts }) {
	if (!posts) return <h1>No snacks available.</h1>

	return (
		<main className={`${styles.columns} ${styles.main}`}>
			{posts?.map((post, index) => (
				<PostItem
					key={index}
					imgURL={post.properties.Image.url}
					title={post.properties.Name.title[0].text.content}
					slug={post.properties.Slug.rich_text[0].text.content}
					rating={post.properties.Rating.rich_text[0].text.content}
					description={post.properties.Description.rich_text[0].text.content}
					tags={post.properties.Tags.multi_select}
					tagPage
				/>
			))}
		</main>
	)
}