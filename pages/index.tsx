import {getAllEventSlugs, getTheme, Event, Theme} from "../lib/datasource";
import * as React from "react";
import Main, {Props as MainProps} from './_main'

export default Main

export async function getStaticProps(context): Promise<{ props: MainProps }> {
    const events = await getAllEventSlugs('en')
    const theme = await getTheme('en')
    return {
        props: {events, theme}
    }
}
