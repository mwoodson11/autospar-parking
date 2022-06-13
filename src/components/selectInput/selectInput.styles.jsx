import styled from 'styled-components';

export const Group = styled.div`
    position: relative;
    margin: 15px 0;
`;

export const SelectInputLabelClass = styled.label`
    color: ${props => props.shrink ? props.color || 'black' : 'gray'};
    font-size: ${props => props.shrink && !props.user ? '12px' : '16px'};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: ${props => props.shrink ? '-22px' : '10px'};
    left: ${props => props.shrink ? '0px' : '5px'};
    transition: 300ms ease all;
`;

export const SelectInputClass = styled.select`
    box-sizing: border-box;
    background: none;
    background-color: ${({disabled}) => disabled ? 'lightgray' : 'white'};
    color: black;
    font-size: ${({theme}) => theme.font.size.small};
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border: 1px solid ${({theme}) => theme.color.border};
    margin: 25px 0;
    ${props => props.password ? 'letter-spacing: 0.3em;' : ''}

    &:focus {
        outline: none;
    }

    &:focus ~ ${SelectInputLabelClass} {
        color: ${props => props.color || 'black'};
        font-size: ${({theme}) => theme.font.size.small};
        top: -22px;
        left: 0px;
    }
`;