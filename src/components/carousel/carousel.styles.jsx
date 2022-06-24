import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCircle } from 'react-icons/fa';
import { motion } from "framer-motion";

export const ContentContainer = styled.div`
    // margin-top: 30px;
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
        justify-content: flex-start;
        height: 60vh;
        max-height: 470px;
    }

    @media screen and (max-height: 650px) {
        height: 60vh;
        min-height: 470px;
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