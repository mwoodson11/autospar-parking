import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCircle } from 'react-icons/fa';
import { motion } from "framer-motion";

export const ContentContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media screen and (max-width: 200px) {
        overflow: hidden;
    }
`;

export const AnimateBox = styled.div`
    height: ${({height}) => height || '480px'};
    width: 100%;
`;

export const ContentInfo = styled(motion.div)`
    display: flex;
    position: absolute;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-height: 50vh;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        height: 60vh;
        max-height: 470px;
    }

    @media screen and (max-height: 650px) {
        height: 60vh;
        min-height: 470px;
    }
`;

export const ContentOverflow = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const ContentImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 80%;
        height: unset;
    }
`;

export const ContentImageDiv = styled.div`
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 80%;
    position: relative;

    @media screen and (max-width: 800px) {
        max-width: 80%;
    }
`;

export const ContentImage = styled.img`
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 80%;

    @media screen and (max-width: 800px) {
        max-height: 300px;
    }
`;

export const ContentButton = styled.a`
    background-color: rgba(0,0,0,0.0);
    display: inline-block;
    margin-top: 10px;
    transition: all 0.4s ease;
    cursor: pointer;
    text-decoration: none;
    color: ${({theme}) => theme.color.accent};

    // &:hover {
    //     // opacity: 1;
    //     background-color: rgba(0,0,0,0.7);
    // }

    @media screen and (max-width: 800px) {

    }
`;

export const ContentInProgress = styled.div`
    // background-color: rgba(0,0,0,0.0);
    display: inline-block;
    margin-top: 10px;
    transition: all 0.4s ease;
    cursor: not-allowed;
    text-decoration: none;
    color: #999;

    // &:hover {
    //     // opacity: 1;
    //     background-color: rgba(0,0,0,0.7);
    // }

    @media screen and (max-width: 800px) {

    }
`;

export const ContentOverlay = styled.div`
    background-color: rgba(0,0,0,0.0);
    height: 100%;
    width: 100%;
    position: absolute;
    color: white;
    transition: all 0.4s ease;

    &:hover {
        background-color: rgba(0,0,0,0.7);
        display: flex;

        & ${ContentButton} {
            opacity: 1;
        }
    }
`;

export const ContentDescription = styled.div`
font-size: ${({theme}) => theme.font.size.small};
width: 40%;
margin: auto 0;
line-height: 1.4;

@media screen and (max-width: 800px) {
    width: 80%;
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
    margin: 10px 0;
}

@media screen and (max-width: 400px) {
    width: 80%;
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    margin-bottom: 0px;
}
`;

export const LeftArrow = styled(IoIosArrowBack)`
    position: absolute;
    top: 45%;
    left: 50px;
    font-size: 3rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    transition: color .2s ease;

    &:hover {
        color: ${({theme}) => theme.color.accent};
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const RightArrow = styled(IoIosArrowForward)`
    position: absolute;
    top: 45%;
    right: 50px;
    font-size: 3rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    transition: color .2s ease;

    &:hover {
        color: ${({theme}) => theme.color.accent};
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ContentSelectContainer = styled.div`
    display: flex;
    margin: 20px 0;
`;

export const ContentSelectIcon = styled(FaCircle)`
    opacity: ${props => props.selected ? '1' : '0.3'};
    font-size: 1rem;
    margin: 5px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    @media screen and (max-width: 800px) {
        margin: 0 10px;
    }
`;