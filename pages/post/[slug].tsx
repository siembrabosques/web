import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {fetchPost, PostListItem, postsList} from "../../data/posts";
import Layout from "../../components/Layout";
import {getNavigation, Navigation} from "../../data/navigation";

type Props = {
	post: PostListItem
	navigation: Navigation
}
export default function Post(props: Props) {
	return <Layout navigation={props.navigation}>
		<div dangerouslySetInnerHTML={{
			__html: props.post.content
		}}/>
	</Layout>
}

export async function getStaticPaths() {
	const posts = await postsList()
	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
					fallback: false
				}
			}
		}),
		fallback: false, // can also be true or 'blocking'
	}
}

export async function getStaticProps({params}) {
	const post = await fetchPost(params.slug)
	const navigation = await getNavigation()

	return {
		props: {
			post,
			navigation
		}
	}
}
