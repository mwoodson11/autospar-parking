import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: ${({theme}) => theme.color.secondary};
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 60px;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        min-height: 100px;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const FooterCreator = styled.a`
display: flex;
align-items: center;
padding:10px;
transition: all .4s ease;
// color: white;
color: rgba(255,255,255,0.8);
fill: white;
text-align: center;
font-size: ${({theme}) => theme.font.size.extraSmall};

&:hover {
    fill: rgba(255,255,255,0.4);
    color: rgba(255,255,255,0.4);
}
@media screen and (max-width: 800px) {
    display: none;
}

`;

export const FooterCreatorMobile = styled.a`
display: none;
align-items: center;
padding:10px;
transition: all .4s ease;
color: rgba(255,255,255,0.8);
fill: white;
text-align: center;
font-size: ${({theme}) => theme.font.size.extraSmall};

&:hover {
    fill: rgba(255,255,255,0.4);
    color: rgba(255,255,255,0.4);
}
@media screen and (max-width: 800px) {
    display: flex;
}
`;

export const FooterBottom = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
`;

export const FooterCopyright = styled.div`
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
    padding: 0 20px;
    color: white;
    text-align: center;
`;

export const FooterSocialIcon = styled.a`
    display: flex;
    align-items: center;
    padding:10px;
    transition: all .4s ease;
    color: white;
    fill: white;
    text-align: center;

    &:hover {
        fill: rgba(255,255,255,0.6);
        color: rgba(255,255,255,0.6);
    }
`;

export const FooterIconText = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({theme}) => theme.font.size.small};
    margin-right: 5px;
`;

export const FooterIcon = styled.a`
    display: flex;
    align-items: center;
`;
