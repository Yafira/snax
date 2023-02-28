import { getPostsByTag } from '../../lib/notion'

export async function getServerSideProps({ params }) {
	const res = await getPostsByTag(params.tag)
	const posts = res.results

	return {
		props: {
			posts,
		},
	}
}

const Tag = ({ posts }) => {
	console.log(posts)

	return (
		<div>
			<span>
				{posts.map((post, id) => {
					return <span key={id}>{<img src={post.properties.Image.url} />}</span>
				})}
			</span>
		</div>
	)
}

export default Tag
