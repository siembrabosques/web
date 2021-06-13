import {getAllEventSlugs, getEventFromSlug, Event} from "../../lib/datasource/datasource";
import Layout from "../../components/Layout";

interface Props {
    event: Event
}

const SlugPage = (props: Props) => <Layout>
    <div dangerouslySetInnerHTML={{__html: props.event.md}}></div>
</Layout>

export default SlugPage

export async function getStaticProps(context) {
    console.log('getEventFromSlug', context.params.slug)
    const event = await getEventFromSlug(context.params.slug, 'en')
    return {
        props: {
            event,
        }
    }
}

export async function getStaticPaths(context) {
    const events = await getAllEventSlugs('en')
    return {
        paths: events.map(event => {
            return {
                params: {
                    slug: event.slug,
                },
            }
        }),
        fallback: false
    }

}