import React from 'react';
import { 
    TestimonialContainer,
    TestimonialImageContainer,
    TestimonialImage,
    TestimonialContent,
    TestimonialTitle,
    TestimonialDescription
} from './testimonial.styles';

const Testimonial = ({image, title, description}) => {
    return (
        <TestimonialContainer>
            <TestimonialImageContainer>
                <TestimonialImage src={image}/>
            </TestimonialImageContainer>
            <TestimonialContent>
                <TestimonialTitle>
                    {title}
                </TestimonialTitle>
                <TestimonialDescription>
                    {description}
                </TestimonialDescription>
            </TestimonialContent>
        </TestimonialContainer>
    );
};

export default Testimonial;