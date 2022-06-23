import styled from "styled-components";

export const RateContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0 20px 20px;
`;

export const RateContent = styled.div`
    text-align: center;
    color: ${({theme}) => theme.color.primary};
    background-color: ${({theme}) => theme.color.accent};
    padding: 30px 20px 50px;
    margin-bottom: 15px;
`;

export const RatePrice = styled.h1``;

export const RateTitle = styled.h3``;

export const RateDescription = styled.div``;

export const RateButton = styled.div``;