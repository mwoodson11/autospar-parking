import React from 'react';
import styled from 'styled-components';
import RateBox from '../components/rateBox/rateBox.component';

const RateContainer = styled.div`
    color: ${({theme}) => theme.color.secondary};
`;

const RateHeader = styled.h1`
    text-align: center;
`;

const RateContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const RateSection = () => {
    return (
        <div id="rate">
        <RateContainer>
            <RateHeader>Parking Options and Rates</RateHeader>
            <RateContent>
                <RateBox 
                    price={"$ 30 /day"} 
                    title={"Basic"} 
                    description={"long established fact a reader will be distracted by the readable content of a page when looking at its"}
                />
                <RateBox 
                    price={"$ 40 /day"} 
                    title={"Basic"} 
                    description={"long established fact a reader will be distracted by the readable content of a page when looking at its"}
                />
                <RateBox 
                    price={"$ 50 /day"} 
                    title={"Basic"} 
                    description={"long established fact a reader will be distracted by the readable content of a page when looking at its"}
                />
            </RateContent>
            
        </RateContainer>
        </div>
    );
};

export default RateSection;