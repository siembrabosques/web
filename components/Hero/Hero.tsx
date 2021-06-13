import styled from '@emotion/styled'
import {Theme} from "../../lib/datasource/datasource";

interface Props {
    className?: string
    theme: Theme
}

const Hero = (props: Props) => {

    return <Root className={props.className}>
        <CalloutBox dangerouslySetInnerHTML={{__html: props.theme.heroMd}} />
    </Root>
}

const Root = styled.div`
  background-color: bisque;
  padding: 14px;
`

const CalloutBox = styled.div`
  padding-top: 100px;
  padding-left: 50px;
  width: 400px;
`
export default Hero