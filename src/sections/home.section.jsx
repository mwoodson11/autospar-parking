import React from 'react';
import styled from 'styled-components';
import Banner from '../components/banner/banner.component';
import Carousel from '../components/carousel/carousel.component';
import Background from '../assets/images/slider-bg.jpg';
const HomeContainer = styled.div`

`;

const TestObj = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HomeTitle = styled.h1``;

const HomeDescription = styled.div``;

const test = [
    <TestObj>
        <HomeTitle>The Best Deals For Parking lots</HomeTitle>
        <HomeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</HomeDescription>
    </TestObj>,
    <TestObj>
        <HomeTitle>The Best Deals For Parking lots</HomeTitle>
        <HomeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</HomeDescription>
    </TestObj>
];


const HomeSection = () => {
    return (
        <div id="home">
            <HomeContainer>
                <Banner image={Background} full>
                    <Carousel contentData={test} height={'370px'}/>
                </Banner>
            </HomeContainer>
        </div>
    );
};

export default HomeSection;