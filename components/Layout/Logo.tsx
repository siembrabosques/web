import * as React from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/css";
import Image from 'next/image'

interface Props {
    className?: string
}

const Logo = (props: Props) => (
    <Root className={props.className}>
        <ImageContainer/>
        <div style={{color: "white"}}>
            es un proyecto de <A href={"https://semillistas.es"}>semillistas.es</A>
        </div>

    </Root>
)
const Root = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  font-family: GalyonBook;
  font-weight: 200;
`

const ImageContainer = styled.div`
  height: 40px;
  background-image: url("/assets/logo_letters.svg");
  background-size: contain;
  background-repeat: no-repeat;
`

const A = styled.a`
  color: yellow;
  text-decoration: none;
  &:visited {
    color: yellow;
  }
`
export default Logo
