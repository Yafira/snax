const { Client } = require('@notionhq/client')

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

export const getAllPublished = async () => {
	const posts = await notion.databases.query({
		database_id: process.env.DATABASE_ID,
		filter: {
			property: 'Published',
			checkbox: {
				equals: true,
			},
		},
		sorts: [
			{
				property: 'Date',
				direction: 'descending',
			},
		],
	})

	const allPosts = posts.results

	return allPosts.map((post) => {
		return getPageMetaData(post)
	})
}
