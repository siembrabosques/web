import * as React from 'react'
import Head from "next/head";
import Header from "../Header";
import {Global, css} from '@emotion/react'
import styled from "@emotion/styled";

interface Props {
    children: any
}

const Layout = (props: Props) => {
    return (
        <Root>
            <Global
                styles={css`
                  body {
                    margin: 0;
                    padding: 0;
                    background: #8f595e;
                  }
                `}
            />
            <Head>
                <title>Siembrabosques</title>
                <link rel="icon" type="image/png" href="/favicon.svg"/>
            </Head>
            <StyledHeader/>
            {props.children}
        </Root>
    )
}

const Root = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
`

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`
export default Layout