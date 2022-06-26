import styled from "styled-components";

export const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
`;

export const TestimonialImageContainer = styled.div`
    width: 125px;
    border-radius: 100%;
    border: 5px solid ${({theme}) => theme.color.primary};
    margin-bottom: -62.5px;
    z-index: 1;
`;

export const TestimonialImage = styled.img`
    width: 100%;
    // height: auto;
`;

export const TestimonialContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 62.5px;
    background-color: white;
    color: ${({theme}) => theme.color.secondary};
`;

export const TestimonialTitle = styled.h3``;

export const TestimonialDescription = styled.p`
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
    height: 100px;
    margin: 2px 0;
`;