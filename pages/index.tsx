import * as React from "react";
import Layout from "../components/Layout";
import {PostListItem, postsList} from "../data/posts";
import {getPage, getPages, PageData, PageItem} from "../data/pages";
import {getNavigation, Navigation} from "../data/navigation";
import Nav from "../components/Navigation/Nav";

export interface Props {
    posts: PostListItem[]
    pages: PageItem[]
    navigation: Navigation
    mainPage?: PageData
}

export default function Main(props: Props) {
    return (
        <Layout>
            <Nav navigation={props.navigation}/>
            {/*<LandingPage sections={props.landingSections} />*/}
            <div dangerouslySetInnerHTML={{__html: props.mainPage.content}} style={{
                backgroundImage: `url(${props.mainPage.featuredImage.node.mediaItemUrl})`
            }}></div>

        </Layout>
    )
}
export async function getStaticProps(context) {
    // const pages = await getLandingSections('es')
    const posts = await postsList()
    const pages = await getPages()
    const navigation = await getNavigation()

    const props: Props = {
        posts,
        pages,
        navigation,
    }


    const mainPageId = pages.find(page => page.isFrontPage)?.id
    if (mainPageId) {
        props.mainPage = await getPage(mainPageId)
    }

    return {
        props
    }}
