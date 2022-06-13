import React from 'react';
import styled from 'styled-components';
import Img1 from '../assets/images/money.png';
import Img2 from '../assets/images/clock.png';
import Img3 from '../assets/images/man.png';

const SaveContainer = styled.div`
    display: flex;
    padding: 50px 0;
    background-color: ${({theme}) => theme.color.accent};

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const SaveBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 20px 0;

    // @media screen and (max-width: 800px) {
    //     flex-direction: column;
    // }
`;

const SaveIcon = styled.img`
    height: 100px;
    width: 100px;
`;

const SaveTitle = styled.h3``;

const SaveDescription = styled.p`
    margin: 0;
`;

const SaveSection = () => {
    return (
        <SaveContainer>
            <SaveBox>
                <SaveIcon src={Img1}/>
                <SaveTitle>Save Money</SaveTitle>
                <SaveDescription>It is a long established fact that a reader will be distracted by the readable content</SaveDescription>
            </SaveBox>
            <SaveBox>
                <SaveIcon src={Img2}/>
                <SaveTitle>Save Time</SaveTitle>
                <SaveDescription>It is a long established fact that a reader will be distracted by the readable content</SaveDescription>
            </SaveBox>
            <SaveBox>
                <SaveIcon src={Img3}/>
                <SaveTitle>Save Stress</SaveTitle>
                <SaveDescription>It is a long established fact that a reader will be distracted by the readable content</SaveDescription>
            </SaveBox>
        </SaveContainer>
    );
};

export default SaveSection;