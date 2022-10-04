import {gql} from "@apollo/client";
import {query} from "./client";

export type NavigationResponse = {
	data: {
		menus: {
			nodes: [Menu]
		}
	}
}
export type Menu = {
	name: string
	id: string
	menuItems: {
		nodes: MenuItem[]
	}
}

export type MenuItem = {
	id: string
	description: string
	label: string
	order: 1
	path: string
	childItems: {
		nodes: SubMenuItem[]
	}
	parentId: string | null
}
export type SubMenuItem = {
	id: string
	label: string
	path: string
	order: number
}

const menuQuery = gql`
    query {
        menus(first: 1) {
            # Navigation
            nodes {
                # Menu
                name
                id
                menuItems(first: 10) {
                    nodes {
                        # Menu Item
	                    id
                        description
                        label
                        order
                        path
                        childItems {
                            nodes {
                                # SubMenuItem
                                id
                                label
                                path
                            }
                        }
                        parentId
                    }
                }
            }
        }
    }
`
export type Navigation = {
	items: MenuItem[]
}
export const getNavigation = async (): Promise<Navigation> => {
	const res: NavigationResponse = await query({
		query: menuQuery
	}) as any as NavigationResponse

	const topItems = res.data.menus.nodes[0].menuItems.nodes.filter(item => !item.parentId)

	return {
		items: topItems,
	}
}
