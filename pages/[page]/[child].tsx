import {GetStaticPaths, GetStaticProps} from "next";
import {getChildPages, getPageFromURI, PageData} from "../../data/pages";
import Page from "../../components/Page/Page";

type Props = {
	page: PageData
}
export default function ChildPage(props: Props) {
	return <Page page={props.page} />
}
export const getStaticProps: GetStaticProps = async (context) => {
	const page = await getPageFromURI(`/${context.params.page}/${context.params.child}`)
	return {
		props: {
			page
		}
	}
}
export const getStaticPaths: GetStaticPaths = async (context) => {
	const childPages = await getChildPages()
	return {
		fallback: false,
		paths: childPages.map(child => ({
			params: {
				page: child.parentSlug,
				child: child.slug,
			}
		}))
	}
}
