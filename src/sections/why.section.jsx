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
`;

const WhyContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 50%;
`;

const WhyImages = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 10px;
    max-width: 50%;
    padding: 10px;
`;

const WhyImageContainer = styled.div`
    position: relative;
`;

const WhyImage = styled.img`
    width: 100%;
    height: auto;
`;

const WhySection = () => {
    return (
        <WhyContainer>
            <WhyContent>
                <h1>Why Choose Us</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are</p>
                <CustomButton>Read More</CustomButton>
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