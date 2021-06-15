import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import styled from "@emotion/styled";
import {Parallax, Background} from "react-parallax";

interface Props {
    section: ILandingPageSection
}

const LandingPageSection = (props: Props) => {
    return (
        <Parallax bgImage={props.section.background}>
            <Root>
                <Content dangerouslySetInnerHTML={{__html: props.section.content}}/>
            </Root>
        </Parallax>
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
  justify-content: center;

`

const Content = styled.div`
  max-width: 550px;
  width: 95vw;
  padding: 32px;
  color: white;
  font-family: GalyonBook, sans-serif;
`

export default LandingPageSection