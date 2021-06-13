import {getAllEventSlugs, getTheme, Event, Theme} from "../lib/datasource/datasource";
import * as React from "react";
import Main, {Props as MainProps} from './_main'
import {getLandingSections} from "../lib/datasource/landing_page";

export default Main


export async function getStaticProps(context) {
    const pages = await getLandingSections('es')
    return {
        props: {
            landingSections: pages, // will be passed to the page component as props
        }

    }}
