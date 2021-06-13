import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import styled from "@emotion/styled";

interface Props {
    section: ILandingPageSection
}

const LandingPageSection = (props: Props) => {
    return (
        <Root dangerouslySetInnerHTML={{__html: props.section.content}}
             style={{
                 backgroundImage: `url(${props.section.background})`,
             }}
        >
        </Root>
    )
}

const Root = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  
`

export default LandingPageSection