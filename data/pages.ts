import {query} from "./client";
import {gql} from "@apollo/client";

export type PageData = PageItem & {
	id: string
	slug: string
	content: string
	author: {
		node: {
			name: string
		}
	}
	featuredImage: {
		node: {
			mediaItemUrl: string
		}
	}
}

export type PageItem = {
	id: string
	isFrontPage: boolean
	slug: string
	title: string
	content: string
}

const PageFragment = gql`
    fragment Page on Page {
        id
        slug
        title
        author {
            node {
                name
            }
        }
        content
        featuredImage {
            node {
                mediaItemUrl
            }
        }
    }
`

export const getPages = async (): Promise<PageItem[]> => {
    const initialList = await query({
        query: gql`
            query {
                pages(first: 1000) {
                    nodes {
                        title
                        id
                        isFrontPage
                        slug
	                    featuredImage {
		                    node {
			                    mediaItemUrl
                            }
		                    
                        }
                    }
                }
            }
		`
    })
	return initialList.data.pages.nodes
}

type ChildPageItem = {
	parentId: string
	parentSlug: string
	slug: string
	id: string
}
export const getChildPages = async (): Promise<ChildPageItem[]> => {
    const pagesList = await query({
        query: gql`
	        ${PageFragment}
            query GetPagesWithChildren {
                pages(first: 1000) {
	                ...Page
                }
            }`
    })
	const parents = pagesList.data.pages.nodes.filter(page => page.children.nodes && page.children.nodes.length > 0)
	const children = parents.reduce((acc, parent) => {
		const childPageItems: ChildPageItem[] = parent.children.nodes.map(child => ({
			parentId: parent.id,
			parentSlug: parent.slug,
			slug: child.slug,
			id: child.id
		}))
		return [...acc, ...childPageItems]
	}, [])
	console.log('children', children)
	return children
}

export const getPageFromURI = async (slug: string): Promise<PageData> => {
    const result = await query({
		variables: {slug},
        query: gql`
            ${PageFragment}
            query PageIDFromPath($slug: ID!) {
                page(id: $slug, idType: URI ) {
                    ...Page
                }
            }
		`,
    })
	return result.data.page
}
export const getPage = async (id: string): Promise<PageData> => {
    const pageResult = await query({
		variables: {id},
        query: gql`
            ${PageFragment}
            query GetPageById($id: ID!) {
                page(id: $id) {
                    ...Page
                }
            }
		`
    })
	return pageResult.data.page
}

export async function mainPage() {
	const pages = await getPages()
	const frontPageId = pages.find(page => page.isFrontPage).id
	return getPage(frontPageId)
}
