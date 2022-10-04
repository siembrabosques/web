import React from 'react'
import {PageData as TPage} from "../../data/pages";

type Props = {
	page: TPage
}
const Page = (props: Props) => {
	return <div>
		{
			props.page.featuredImage?.node?.mediaItemUrl && <img src={props.page.featuredImage.node.mediaItemUrl}/>
		}
		<h2>
			{
				props.page.title
			}
		</h2>
		<div dangerouslySetInnerHTML={{__html: props.page.content}} />
	</div>
}

export default Page
