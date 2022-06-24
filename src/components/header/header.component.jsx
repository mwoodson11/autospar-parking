import React, {useState, useEffect} from 'react';

import { 
    HeaderContainer,
    HeaderOptions,
    HeaderOption,
    HeaderLogo,
    NavIcon,
    NavCloseIcon,
    NavBackdrop
} from './header.styles';

const Header = () => {
    const [scrollHide, setScrollHide] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleOpenClick = () => {
        setOpened(!opened);
    }

    useEffect(() => {
        const threshold = 10;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollHide = () => {
            const scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollHide(scrollY > lastScrollY);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollHide);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollHide]);
    return (
        <>
        <NavBackdrop opened={opened} onClick={handleOpenClick} />
        <HeaderContainer hidden={scrollHide}>
            <HeaderLogo 
                activeClass="active"
                to="home" 
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                Autospar
            </HeaderLogo>
            <HeaderOptions>
                <HeaderOption 
                    activeClass="active"
                    to="home" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Home
                </HeaderOption>
                <HeaderOption 
                    activeClass="active"
                    to="about" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About Us
                </HeaderOption>
                <HeaderOption 
                    activeClass="active"
                    to="features" 
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >
                    Features
                </HeaderOption>
                <HeaderOption 
                    activeClass="active"
                    to="services" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Services
                </HeaderOption>
                <HeaderOption 
                    activeClass="active"
                    to="contact" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Contact Us
                </HeaderOption>
            </HeaderOptions>
            <NavIcon onClick={handleOpenClick} opened={opened}/>
            <NavCloseIcon onClick={handleOpenClick} opened={opened}/>
        </HeaderContainer>
        </>
    )
};

export default Header;