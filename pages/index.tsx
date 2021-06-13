import {getAllEventSlugs, getTheme, Event, Theme} from "../lib/datasource/datasource";
import * as React from "react";
import {getLandingSections, LandingPageSection} from "../lib/datasource/landing_page";
import Layout from "../components/Layout";
import LandingPage from "../components/LandingPage";

export interface Props {
    foo: string
    landingSections: LandingPageSection[]
}
export default function Main(props: Props) {
    return (
        <Layout>
            <LandingPage sections={props.landingSections} />
        </Layout>
    )
}
export async function getStaticProps(context) {
    const pages = await getLandingSections('es')
    return {
        props: {
            landingSections: pages, // will be passed to the page component as props
        }

    }}
