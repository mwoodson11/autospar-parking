import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CarWashSVG }  from '../assets/svg/carWash.svg';
import { ReactComponent as ConciergeSVG }  from '../assets/svg/concierge.svg';
import { ReactComponent as CloseSVG }  from '../assets/svg/closeAndHandy.svg';
import { ReactComponent as SafeSVG }  from '../assets/svg/safeAndSecure.svg';
import CustomButton from '../components/customButton/customButton.component';

const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.color.secondary};
`;

const ServiceHeader = styled.div`
    width: 800px;
    max-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
`;

const ServiceHeaderTitle = styled.h1``;

const ServiceHeaderDesc = styled.div``;

const ServiceBoxHolder = styled.div`
    width: 800px;
    max-width: 100%;
`;

const ServiceBox = styled.div`
    display: flex;
    margin: 20px 0;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const ServiceIcon = styled.div`
    height: 150px;
    min-width: 150px;
    // max-width: 150px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted ${({theme}) => theme.color.secondary};
    box-sizing: border-box;
`;

const ServiceBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    
    @media screen and (max-width: 800px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const ServiceBoxTitle = styled.h3`
    margin: 0 0 05px;
`;

const ServiceBoxDescription = styled.div`
    @media screen and (max-width: 800px) {
        text-align: center; 
    }
`;

const ButtonContainer = styled.div``;

const ServiceSection = () => {
    return (
        <ServiceContainer>
            <ServiceHeader>
                <ServiceHeaderTitle>Our Services</ServiceHeaderTitle>
                <ServiceHeaderDesc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If</ServiceHeaderDesc>
            </ServiceHeader>
            <ServiceBoxHolder>
                <ServiceBox>
                    <ServiceIcon>
                        <CarWashSVG />
                    </ServiceIcon>
                    <ServiceBoxContent>
                        <ServiceBoxTitle>Car Wash</ServiceBoxTitle>
                        <ServiceBoxDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing eullamco</ServiceBoxDescription>
                        <ButtonContainer>
                            <CustomButton>Read More</CustomButton>
                        </ButtonContainer>
                    </ServiceBoxContent>
                </ServiceBox>
                <ServiceBox>
                    <ServiceIcon>
                        <ConciergeSVG />
                    </ServiceIcon>
                    <ServiceBoxContent>
                        <ServiceBoxTitle>Concierge Options</ServiceBoxTitle>
                        <ServiceBoxDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing eullamco</ServiceBoxDescription>
                        <ButtonContainer>
                            <CustomButton>Read More</CustomButton>
                        </ButtonContainer>
                    </ServiceBoxContent>
                </ServiceBox>
                <ServiceBox>
                    <ServiceIcon>
                        <CloseSVG />
                    </ServiceIcon>
                    <ServiceBoxContent>
                        <ServiceBoxTitle>Close And Handy</ServiceBoxTitle>
                        <ServiceBoxDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing eullamco</ServiceBoxDescription>
                        <ButtonContainer>
                            <CustomButton>Read More</CustomButton>
                        </ButtonContainer>
                    </ServiceBoxContent>
                </ServiceBox>
                <ServiceBox>
                    <ServiceIcon>
                        <SafeSVG />
                    </ServiceIcon>
                    <ServiceBoxContent>
                        <ServiceBoxTitle>Safe And Secure</ServiceBoxTitle>
                        <ServiceBoxDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing eullamco</ServiceBoxDescription>
                        <ButtonContainer>
                            <CustomButton>Read More</CustomButton>
                        </ButtonContainer>
                    </ServiceBoxContent>
                </ServiceBox>
            </ServiceBoxHolder>
        </ServiceContainer>
    );
};

export default ServiceSection;