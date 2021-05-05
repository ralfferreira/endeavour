import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, NavItem, NavLinks, NavMenu, MobileIcon } from './style'
import logo from '../../assets/logo.png'

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/' onClick={toggleHome}>
                    <img src={logo} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" activeClass="active"
                        spy={true} smooth={true} offset={-70} duration={500}>
                        Quem Somos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="mission" activeClass="active"
                        spy={true} smooth={true} offset={-70} duration={500}>
                        Missão</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="vision" activeClass="active"
                        spy={true} smooth={true} offset={-70} duration={500}>
                        Visão</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team" activeClass="active"
                        spy={true} smooth={true} offset={-70} duration={500}>
                        Equipe</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="values" activeClass="active"
                        spy={true} smooth={true} offset={-70} duration={500}>
                        Valores</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;