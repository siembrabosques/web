import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import LandingPageSection from "./LandingPageSection";
import * as React from 'react';
import styled from "@emotion/styled";

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
    </Root>
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
export default LandingPage