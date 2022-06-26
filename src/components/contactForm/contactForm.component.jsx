import React, { useRef, useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import emailjs from 'emailjs-com';

import FormInput from '../../components/formInput/formInput.component';
import CustomButton from '../../components/customButton/customButton.component';
import {
    // ErrorMessage,
    FormBox,
    FormInputLabel,
    TextArea,
    FormButtons,
    InputBox,
} from './contactForm.styles'

const ContactForm = () => {

    const formRef = useRef();
    const [user, setUser] = useState({ email: '', name: '', phone: '', message: ''});
    // const [submitMessage, setMessage] = useState('');
    // const [errorMessage, setError] = useState('');
    // const [isDisabled, toggleDisable] = useState(true);

    let { email, name, phone, message } = user;
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
            <InputBox>
            <FormInput 
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                label="Name"
                color={'white'}
                required
            /> 
            </InputBox>
            <InputBox>
            <FormInput 
                name="email" 
                type="email" 
                value={email} 
                onChange={handleChange}
                label="Email"
                color={'white'}
                required />
            </InputBox>
            <InputBox>
            <FormInput 
                name="phone" 
                type="tel" 
                value={phone} 
                onChange={handleChange}
                label="Phone Number"
                color={'white'}
                required />
            </InputBox>
            <InputBox>
            <FormInputLabel>Message</FormInputLabel>
            <TextArea 
                name="message" 
                type="text" 
                value={message} 
                onChange={handleChange}
                rows="6"
                required 
            />
            </InputBox>
            <FormButtons>
                <CustomButton type="submit"> Send Message </CustomButton>
            </FormButtons>
        </FormBox>
    );
};

export default ContactForm;