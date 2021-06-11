import * as React from 'react'
import Head from "next/head";
import Header from "../Header";
import {Global, css} from '@emotion/react'

interface Props {
    children: any
}

const Layout = (props: Props) => {
    return (
        <div>
            <Global
                styles={css`
                  body {
                    margin: 0;
                    padding: 0;
                  }
                `}
            />
            <Head>
                <title>Siembrabosques</title>
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout