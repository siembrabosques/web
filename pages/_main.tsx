import {Event, Theme} from "../lib/datasource/datasource";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import {css} from "@emotion/css";
import News from "../components/News";
import EventsList from "../components/EventsList";
import * as React from "react";
import styled from "@emotion/styled";
import {getLandingSections, LandingPageSection} from "../lib/datasource/landing_page";
import LandingPage from "../components/LandingPage/LandingPage";

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
