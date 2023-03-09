import Image from 'next/image'
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
					return (
						<span key={id}>
							{
								<Image
									unoptimized
									src={post.properties.Image.url}
									responsive
									width={260}
									height={270}
									alt='resource'
								/>
							}
						</span>
					)
				})}
			</span>
		</div>
	)
}

export default Tag
