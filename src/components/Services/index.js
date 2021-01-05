import React from 'react';
import Icon1 from '../../imagess/svg-4.svg';
import Icon2 from '../../imagess/svg-2.svg';
import Icon3 from '../../imagess/svg-6.svg';



import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Responsive Websites</ServicesH2>
                <ServicesP>We Provides You the Best Free Responsive Website Templates.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Domain & Hosting </ServicesH2>
                <ServicesP>You Can Access our platform online Anywhere in the World</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Mobile Friendly</ServicesH2>
                <ServicesP>Build And Host Your First Mobile Friendly And Responsive Website</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
