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
            es un proyecto de <a href={"https://semillistas.es"}>semillistas.es</a>
        </div>

    </Root>
)
const Root = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  height: 40px;
  background-image: url("/assets/logo_letters.svg");
  background-size: contain;
  background-repeat: no-repeat;
`
export default Logo
