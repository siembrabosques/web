import {getAllEventSlugs, getTheme, Event, Theme} from "../lib/datasource";
import Main, {Props as MainProps} from './_main'

export default Main

export async function getStaticProps(context): Promise<{ props: MainProps }> {
    const events = await getAllEventSlugs(context.params.language)
    const theme = await getTheme(context.params.language)
    return {
        props: {events, theme}
    }
}

export async function getStaticPaths() {
    return {
        paths: ['en', 'fr', 'es'].map(language => ({
            params: {
                language
            }
        })),
        fallback: false
    }
}
