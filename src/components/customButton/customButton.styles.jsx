import styled from 'styled-components';

export const ButtonContainer = styled.button`
    margin: 10px 0;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: ${({theme}) => theme.font.size.small};
    background-color: ${props => {
        if (props.inverted) return props.theme.color.primary;
        return props.theme.color.accent;
    }};
    color: ${props => {
        if (props.inverted) return props.theme.color.darkSecondary; 
        return props.theme.color.primary;
    }};
    //   text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all ease 0.3s;
    overflow: hidden;

    &:hover {
        background-color: ${props => {
            if (props.inverted) return props.theme.color.secondButton;
            return props.theme.color.primary;
        }};
        color: ${props => {
            if (props.inverted) return props.theme.color.darkSecondary;
            return props.theme.color.accent;
        }};
        border: 1px solid ${({theme}) => theme.color.accent};
    }
`;