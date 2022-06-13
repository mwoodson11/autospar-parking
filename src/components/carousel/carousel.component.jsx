import React, { useState } from 'react';
import { 
    ContentContainer,
    ContentInfo,
    LeftArrow,
    RightArrow,
    ContentSelectContainer,
    ContentSelectIcon,
    AnimateBox,
} from './carousel.styles';
import { AnimatePresence } from 'framer-motion';

const Carousel = ({contentData = [], height}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (ind) => {
        setIndex(ind);
    }

    const decrementClick = () => {
        setIndex(index === 0 ? contentData.length - 1 : index - 1);
    }

    const incrementClick = () => {
        setIndex(index === contentData.length - 1 ? 0 : index + 1);
    }

    let contentIcons = [];
    for (let i = 0; i < contentData.length; i++) {
        contentIcons.push(<ContentSelectIcon key={i} onClick={() => handleSelect(i)} selected={index === i}/>)
    }

    const contentSelector = (
        <ContentSelectContainer>
            {contentIcons}
        </ContentSelectContainer>
    );

    return (
        <ContentContainer>
            <AnimateBox height={height}>
                <AnimatePresence exitBeforeEnter>
                    <ContentInfo key={index} selected
                        initial={{ x: "50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-50%', opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                            {contentData[index]}
                    </ContentInfo>
                </AnimatePresence>
            </AnimateBox>
            {contentSelector}
            <LeftArrow onClick={decrementClick}/>
            <RightArrow onClick={incrementClick}/>
        </ContentContainer>
    );
};

export default Carousel;