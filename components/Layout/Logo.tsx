import * as React from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/css";
import Image from 'next/image'

const Logo = () => (
    <div style={{background: 'black'}}>
        <Image src="/assets/logo_letters.svg" width={400} height={200}/>
        <div className={css`
          text-transform: uppercase;
        `}
        >
            Siembrabosques
        </div>
        <div>
            es un proyecto de <a href={"https://semillistas.es"}>semillistas.es</a>
        </div>

    </div>
)
const Root = styled.div`

`
const Title = styled.div``

export default Logo