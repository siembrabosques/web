import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {fetchPost, PostListItem, postsList} from "../../data/posts";

type Props = {
	post: PostListItem
}
export default function Post(props: Props) {
	return <div dangerouslySetInnerHTML={{
		__html: props.post.content
	}}></div>
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
	return {
		props: {
			post
		}
	}
}
