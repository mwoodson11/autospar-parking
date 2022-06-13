import styled from "styled-components";

export const FormBox = styled.form`
    width: 90%;
    margin: auto;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        width: 80%;
        flex-direction: column;
    }
`;

export const InputBox = styled.div`
    width: 200px;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const FormInputLabel = styled.div`
    // color: black;
    font-size: 16px;
    font-weight: normal;
    pointer-events: none;
    // transition: 300ms ease all;
`;

export const TextArea = styled.textarea`
    box-sizing: border-box;
    background: none;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.primary};
    font-size: 18px;
    padding: 10px 5px 10px 5px;
    display: block;
    width: 90%;
    border-radius: 0;
    border: 1px solid ${({theme}) => theme.color.secondary};
    margin: 5px 0 25px 0;
    transition: 400ms ease all;

    &:focus {
        outline: none !important;
        border: 1px solid ${({theme}) => theme.color.primary};
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
`;

export const FormButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;