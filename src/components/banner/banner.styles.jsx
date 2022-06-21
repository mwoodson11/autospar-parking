import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    // ${props => props.full ? "min-height: 100vh" : "height: 250px"};
    height: ${props => props.full ? "100vh" : "500px"};
    // height: 100%;
`;

export const BannerImage = styled.div`
    position: absolute;
    width: 100%;
    // background-position: center center;
    background-size: cover;
    background-attachment: ${({fixed}) => fixed ? 'fixed' : 'scroll'};
    background-image: url(${props => props.image});
    // ${props => props.full ? "min-height: 100vh" : "height: 250px"};
    height: 100%;
`;

export const BannerOverlay = styled.div`
    background-color: rgba(0,0,0,0.4);
    height: 100%;
    width: 100%;
`;

export const BannerContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // position: absolute;
    text-align: center;
    color: white;
    justify-content: center;
    align-items: center;
    position: relative;
    // overflow: auto;
`;

export const BannerTitle = styled.div`
    display: flex;
    font-size: ${({theme}) => theme.font.size.titleLarge};
    justify-content: center;
    flex-wrap: wrap;
    z-index: 1;
`;

export const BannerDescription =styled.div`
    font-size: ${({theme}) => theme.font.size.mobileLarge};
    width: 80%;
    justify-content: center;
    display: flex;
`;