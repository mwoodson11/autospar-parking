import React from 'react';
import CustomButton from '../customButton/customButton.component';
import { RateButton, RateContainer, RateContent, RateDescription, RatePrice, RateTitle } from './rateBox.styles';

const RateBox = ({price, title, description}) => {
    return (
        <RateContainer>
            <RateContent>
                <RatePrice>{price}</RatePrice>
                <RateTitle>{title}</RateTitle>
                <RateDescription>{description}</RateDescription>
            </RateContent>
            <RateButton>
                <CustomButton>Read More</CustomButton>
            </RateButton>
        </RateContainer>
    );
};

export default RateBox;