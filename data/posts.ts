import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {query} from "./client";


type DataList = {
	posts: Array<{
		nodes: Array<PostListItem>
	}>
}
export type PostListItem = {
	id: string
	slug: string
	date: string
	title: string
	author: {
		node: {
			id: string
			name: string
		}
	}
	content: string
}

export const postsList: () => Promise<PostListItem[]> = async () => {
    const listQuery = gql`
        query {
            posts(first: 1000) {
                nodes {
                    id
                    slug
                    date
                    title
                    content
                    author {
                        node {
                            id
                            name
                        }
                    }
                }
            }
        }
	`

	const result = await query({query: listQuery})
	return result.data.posts.nodes
}

export const fetchPost: (slug: string) => Promise<PostListItem> = async (slug: string) => {
	const list = await postsList()
	return list.find(item => item.slug === slug)
}
