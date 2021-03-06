import React, {useState, useEffect} from 'react';

import { 
    HeaderContainer,
    HeaderContainerMobile,
    HeaderOptions,
    HeaderOption,
    HeaderLogo,
    NavIcon,
    NavCloseIcon,
    NavBackdrop,
    MobileLinkBox
} from './header.styles';

const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

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
        <HeaderContainerMobile 
            variants={menuVariants} 
            hidden={scrollHide} 
            animate={opened ? "opened" : "closed"}
            initial={false}
        >
            {/* <HeaderOptions> */}
            <MobileLinkBox variants={linkVariants}>
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
            </MobileLinkBox>
            <MobileLinkBox variants={linkVariants}>
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
                </MobileLinkBox>
                <MobileLinkBox variants={linkVariants}>
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
                </MobileLinkBox>
                <MobileLinkBox variants={linkVariants}>
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
                </MobileLinkBox>
                <MobileLinkBox variants={linkVariants}>
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
                </MobileLinkBox>
            {/* </HeaderOptions> */}
            {/* <NavIcon onClick={handleOpenClick} opened={opened}/> */}
            <NavCloseIcon onClick={handleOpenClick} opened={opened}/>
        </HeaderContainerMobile>
        </>
    )
};

export default Header;