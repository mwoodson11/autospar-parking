import React from 'react';
import styled from 'styled-components';
import RequestForm from '../components/requestForm/requestForm.component';

const RequestContainer = styled.div`
    width: 100%;
`;

const FormHolder = styled.div`
    background-color: ${({theme}) => theme.color.primary};
    z-index: 1000;
    position: relative;
    margin: 30px;
    padding-top 20px;
    box-sizing: border-box;
    margin-top: -50px;
    box-shadow: 0px 0px 20px 11px rgb(0 0 0 / 9%);
    @media screen and (max-width: 800px) {
        margin-top: -100px;
    }
`;

const RequestSection = () => {
    return (
        <RequestContainer>
            <FormHolder>
                <RequestForm />
            </FormHolder>
        </RequestContainer>
    );
};

export default RequestSection;