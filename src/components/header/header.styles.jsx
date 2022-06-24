import styled, {css} from "styled-components";

import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

export const HeaderContainer = styled.div`
    height: ${({theme}) => theme.sizes.headerHeight};
    width: 100%;
    opacity: ${props => props.hidden ? '0' : '1'};
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    background-color: ${({theme}) => theme.color.secondary};
    position: fixed;
    align-items: center;
    z-index: 999;
    transition: all .4s ease;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 300px) {
        justify-content: flex-end;
    }

    @media screen and (max-width: 200px) {
        overflow: hidden;
    }
`;

export const HeaderOptions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const HeaderOption = styled(Link)`
    padding: 10px 15px;
    color: inherit;
    opacity: 1;
    transition: color .3s ease;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.color.accent};
    }

    // &.active {
    //     color: ${({theme}) => theme.color.accent};
    // }

    &:focus {
        outline: none;
        color: unset;
    }
`;

export const NavBackdrop = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        top: 0;
        z-index: 49;
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        display: flex;
        height: ${props => props.opened ? "100%" : "0"};
        width: 100%;
        opacity: ${props => props.opened ? "1" : "0"};
        transition: opacity .4s ease;
    }
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    font-size: 30px;
    align-items: center;
    height: 100%;
    margin: 0 0 0 25px;
    color: ${({theme}) => theme.color.primary};
    font-family: ${({theme}) => theme.font.logo};
    cursor: pointer;
    text-transform: uppercase;

    @media screen and (max-width: 800px) {
        font-size: 22px;
    }

    @media screen and (max-width: 300px) {
        display: none
    }
`;

export const ToggleContainer = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.color.background};
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 30px 0 100px;
    transition: 300ms ease background-color;

    @media screen and (max-width: 800px) {
        margin: 0 30px 0 0px;
    }

    @media screen and (max-width: 200px) {
        overflow: hidden;
        margin: 0px;
    }
`;


const IconCss = css`
    display: none;
    font-size: 2rem;
    padding: 10px;
    margin: 10px;
    color: ${({theme}) => theme.color.primary};
    z-index: 70;
    cursor: pointer;
    user-select: none;
    position: fixed;
    top: 0;
    right: 0;
    background: transparent;
    border-radius: 50%;
`;

export const NavIcon = styled(AiOutlineMenu)`
    ${IconCss}

    @media screen and (max-width: 800px) {
        display: ${props => props.opened ? "none" : "block"};
    }
`;

export const NavCloseIcon = styled(RiCloseFill)`
    ${IconCss}

    @media screen and (max-width: 800px) {
        display: ${props => props.opened ? "block" : "none"};
    }
`;