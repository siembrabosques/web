import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import LandingPageSection from "./LandingPageSection";
import * as React from 'react';
import styled from "@emotion/styled";
import DonateButton from "./DonateButton";

interface Props {
    sections: ILandingPageSection[]
}

const LandingPage = (props: Props) => {
    return <Root>
            {
                props.sections.map(section => (
                    <LandingPageSection key={section.originFile} section={section}/>
                ))
            }
            <StyledDonateButton />
    </Root>
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDonateButton = styled(DonateButton)`
  width: 240px;
  height: 240px;
  position: fixed;
  bottom: 0;
  right: 0;
`
export default LandingPage