import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import {
    ErrorMessage,
    FormBox,
    // FormInputLabel,
    // TextArea,
    FormButtons,
    InputBox,
    // ReCaptchaDiv
} from './requestForm.styles'
import SelectInput from '../selectInput/selectInput.component';

const ContactForm = () => {

    const formRef = useRef();
    const [user, setUser] = useState({ email: '', name: '', phone: '', level: ''});
    const [submitMessage, setMessage] = useState('');
    const [errorMessage, setError] = useState('');
    // const [isDisabled, toggleDisable] = useState(true);

    let { email, name, phone, level } = user;
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
            {submitMessage}
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <InputBox>
            <SelectInput 
                label="Select your level:" 
                value={level}
                onChange={handleChange}
                name="level"
            >
                <option value=""></option>
                <option value="first">First Floor</option>
                <option value="second">Second Floor</option>
            </SelectInput>
            </InputBox>
            <InputBox>
            <FormInput 
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                label="Name"
                required
            /> 
            </InputBox>
            <InputBox>
            <FormInput 
                name="phone" 
                type="tel" 
                value={phone} 
                onChange={handleChange}
                label="Phone Number"
                required />
            </InputBox>
            {/* <InputBox>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    onChange={handleChange}
                    label="Email"
                    required />
            </InputBox> */}
            <FormButtons>
                <CustomButton type="submit">Request a Call </CustomButton>
            </FormButtons>
        </FormBox>
    );
};

export default ContactForm;