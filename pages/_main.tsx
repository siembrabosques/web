import {Event, Theme} from "../lib/datasource";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import {css} from "@emotion/css";
import News from "../components/News";
import EventsList from "../components/EventsList";
import * as React from "react";
import styled from "@emotion/styled";

export interface Props {
    theme: Theme
    events: Event[]
}
export default function Main(props: Props) {
    return (
        <Layout>
            <Hero theme={props.theme}/>
            <BottomPart>
                <News/>
                <EventsList events={props.events} className={css`width: 400px;`}/>
            </BottomPart>
        </Layout>
    )
}

const BottomPart = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1;
  }
`