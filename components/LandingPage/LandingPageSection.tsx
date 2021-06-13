import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import styled from "@emotion/styled";

interface Props {
    section: ILandingPageSection
}

const LandingPageSection = (props: Props) => {
    return (
        <Root
             style={{
                 backgroundImage: `url(${props.section.background})`,
             }}
        >
            <Content dangerouslySetInnerHTML={{__html: props.section.content}} />
        </Root>
    )
}

const Root = styled.div`
  padding-top: 80px;
  height: 100vh;
  min-height: 660px;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-sizing: border-box;
  
`

const Content = styled.div`
  width: 600px;
  color: white;
  font-family: GalyonBook,sans-serif;
`

export default LandingPageSection