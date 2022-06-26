import React from 'react';
import styled from 'styled-components';
import CustomButton from '../components/customButton/customButton.component';
import Pic1 from '../assets/images/w-1.jpg';
import Pic2 from '../assets/images/w-2.jpg';
import Pic3 from '../assets/images/w-3.jpg';
import Pic4 from '../assets/images/w-4.jpg';

const WhyContainer = styled.div`
    width: 100%;
    color: ${({theme}) => theme.color.secondary};
    display: flex;
    justify-content: center;
`;

const WhyContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 50%;
    width: 400px;
    padding: 0 20px;
    box-sizing: border-box;

    @media screen and (max-width: 400px) {
        width: 100%;
        max-width: unset;
    }

`;

const WhyImages = styled.div`
    // margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 10px;
    max-width: 50%;
    padding: 10px;
    width: 400px;


    @media screen and (max-width: 800px) {
        align-content: center;
        grid-template-columns: 1fr;
        gap: 0;
    }

    @media screen and (max-width: 400px) {
        display: none;
        max-width: unset;
    }
`;

const WhyImageContainer = styled.div`
    position: relative;

    @media screen and (max-width: 800px) {
        &:not(:first-child) {
            display: none;
        }
    }
`;

const WhyImage = styled.img`
    width: 100%;
    height: auto;
`;

const WhyButton = styled.div`
    display: flex;
`;

const WhySection = () => {
    return (
        <WhyContainer>
            <WhyContent>
                <h1>Why Choose Us</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are</p>
                <WhyButton>
                    <CustomButton>Read More</CustomButton>
                </WhyButton>
            </WhyContent>
            <WhyImages>
                <WhyImageContainer>
                    <WhyImage src={Pic1}/>
                </WhyImageContainer>
                <WhyImageContainer>
                    <WhyImage src={Pic2}/>
                </WhyImageContainer>
                <WhyImageContainer>
                    <WhyImage src={Pic3}/>
                </WhyImageContainer>
                <WhyImageContainer>
                    <WhyImage src={Pic4}/>
                </WhyImageContainer>
            </WhyImages>
        </WhyContainer>
    );
};

export default WhySection;