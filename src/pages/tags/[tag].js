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
			<h1>results</h1>
			<ul>
				{posts.map((post, id) => {
					return (
						<li key={id}>
							<img src={post.properties.Image.url} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Tag
