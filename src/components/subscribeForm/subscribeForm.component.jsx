import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import {
    // ErrorMessage,
    FormBox,
    FormButtons,
} from './subscribeForm.styles'
// import SelectInput from '../selectInput/selectInput.component';

const SubscribeForm = () => {

    const formRef = useRef();
    const [user, setUser] = useState({ email: ''});
    // const [submitMessage, setMessage] = useState('');
    // const [errorMessage, setError] = useState('');
    // const [isDisabled, toggleDisable] = useState(true);

    let { email } = user;
    const handleSubmit =  async event => {
        event.preventDefault();
        // emailjs.sendForm(
        //     'service_z1q4kam', 
        //     'template_57kkk29', 
        //     formRef.current, 
        //     'user_mJlaAz8Q3nmjRnkJjAPIP'
        // )
        // .then((result) => {
        //     console.log(result.text);
        //     setMessage('Message Sent!');
        //     setError('');
        //     setUser({ email: '', name: '', message: ''})
        // }, (error) => {
        //     console.log(error.text);
        //     setError('Error sending the message...');
        //     setMessage('');
        // });
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setUser({ ...user, [name]: value});
    };

    return (
        <FormBox ref={formRef} onSubmit={handleSubmit}>
            {/* {submitMessage} */}
            {/* <ErrorMessage>{errorMessage}</ErrorMessage> */}
            <FormInput 
                name="email" 
                type="email" 
                value={email} 
                onChange={handleChange}
                label="Enter your email"
                required />

            <FormButtons>
                <CustomButton type="submit">Subscribe</CustomButton>
            </FormButtons>
        </FormBox>
    );
};

export default SubscribeForm;