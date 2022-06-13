import React from 'react';

import './banner.styles.jsx';
import { 
    BannerContainer,
    BannerImage,
    BannerOverlay, 
    BannerContent
} from './banner.styles.jsx';

const Banner = ({children, image, full, fixed, overlay}) => (
    <BannerContainer full={full}>
        <BannerImage 
            image={image}
            fixed={fixed}
        >
            {overlay && <BannerOverlay />}
        </BannerImage>
        <BannerContent>
            {children}
        </BannerContent>
    </BannerContainer>
);

export default Banner;