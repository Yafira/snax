const { Client } = require('@notionhq/client')

const dbID = process.env.NEXT_PUBLIC_DATABASE_ID
const notionToken = process.env.NEXT_PUBLIC_NOTION_TOKEN

const notion = new Client({
	auth: notionToken,
})

export const getAllPublished = async () => {
	const posts = await notion.databases.query({
		database_id: dbID,
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

const getPageMetaData = (post) => {
	const getTags = (tags) => {
		//console.log('tags', tags)
		const allTags = tags.map((tag) => {
			return tag.name
		})

		return allTags
	}

	return {
		id: post.id,
		title: post.properties.Name.title[0].plain_text,
		tags: getTags(post.properties.Tags.multi_select),
		image: post.properties.Image.url,
		rating: post.properties.Rating.rich_text[0].plain_text,
		description: post.properties.Description.rich_text[0].plain_text,
		date: getToday(post.properties.Date.created_time),
		slug: post.properties.Slug.rich_text[0].plain_text,
	}
}

function getToday(datestring) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	let date = new Date()

	if (datestring) {
		date = new Date(datestring)
	}

	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	let today = `${month} ${day}, ${year}`

	return today
}

const { NotionToMarkdown } = require('notion-to-md')
const n2m = new NotionToMarkdown({ notionClient: notion })

export const getSingleBlogPostBySlug = async (slug) => {
	const response = await notion.databases.query({
		database_id: dbID,
		filter: {
			property: 'Slug',
			formula: {
				string: {
					equals: slug,
				},
			},
		},
	})

	const page = response.results[0]
	const metadata = getPageMetaData(page)
	const mdblocks = await n2m.pageToMarkdown(page.id)
	const mdString = n2m.toMarkdownString(mdblocks)

	return {
		metadata,
		markdown: mdString,
	}
}

export const getPostsByTag = async (tag) => {
	try {
		const myPage = await notion.databases.query({
			database_id: dbID,
			filter: {
				property: 'Tags',
				multi_select: {
					contains: tag,
				},
			},
		})

		return myPage
	} catch (err) {
		console.log(err)
	}
}
