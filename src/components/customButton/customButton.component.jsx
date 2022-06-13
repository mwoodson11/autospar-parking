import React from 'react';
import { ButtonContainer } from './customButton.styles';

const CustomButton = ({children, inverted, ...otherProps}) => (
    <ButtonContainer inverted={inverted}  
        {...otherProps}>
          {children}
    </ButtonContainer>
);

export default CustomButton;