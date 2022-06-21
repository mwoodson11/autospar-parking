import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/carousel/carousel.component';
import Testimonial from '../components/testimonial/testimonial.component';
import Pic1 from '../assets/images/client.png';
import Banner from '../components/banner/banner.component';
import Background from '../assets/images/client-bg.jpg';

const TestContainer = styled.div`
    background-color: black;
`;
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum";
const test = [
    <Testimonial image={Pic1} title={"LABORIS NISI"} description={description}/>,
    <Testimonial image={Pic1} title={"LABORIS NISI"} description={description}/>
]

const TestimonialSection = () => {
    return (
        <TestContainer>
            <Banner image={Background}>
                <Carousel contentData={test} height={'370px'}/>
            </Banner>
        </TestContainer>
    );
};

export default TestimonialSection;