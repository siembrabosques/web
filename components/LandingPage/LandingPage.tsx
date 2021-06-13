import {LandingPageSection as ILandingPageSection} from "../../lib/datasource/landing_page";
import LandingPageSection from "./LandingPageSection";
import * as React from 'react';

interface Props {
    sections: ILandingPageSection[]
}

const LandingPage = (props: Props) => {
    return <>
        {
            props.sections.map(section => (
                <LandingPageSection key={section.originFile} section={section} />
            ))
        }
    </>
}

export default LandingPage