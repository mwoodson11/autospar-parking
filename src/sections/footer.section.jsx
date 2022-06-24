import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contactForm/contactForm.component';
import SubscribeForm from '../components/subscribeForm/subscribeForm.component';
import Footer from '../components/footer/footer.component';

const FooterContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.color.secondary};
`;

const ContactContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
    margin: auto;

    & .contact-box {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        flex-direction: column;
        align-items: center;
        width: 800px;
    }
`;

const ContactTitle = styled.h1``;

const SubscribeContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
    margin: auto;

    & .contact-box {
        display: flex;
        justify-content: center;
        padding: 20px 0 0;
        flex-direction: column;
        align-items: center;
        width: 800px;
    }
`;

const SubscribeDesc = styled.div`
    width: 80%;
    text-align: center;
`;


const FooterSection = () => {
    return (
        <FooterContainer>
            <ContactContainer>
                <div className='contact-box'>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactForm />
                </div>
            </ContactContainer>
            <SubscribeContainer>
                <div className='contact-box'>
                    <h3>Subscribe now</h3>
                    <SubscribeDesc>There are many variations of passages of Lorem Ipsum available,</SubscribeDesc>
                    <SubscribeForm />
                </div>
            </SubscribeContainer>
            <Footer />
        </FooterContainer>
    );
};

export default FooterSection;