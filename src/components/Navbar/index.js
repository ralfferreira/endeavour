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
                        <NavLinks to="about">Quem Somos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="mission">Missão</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="vision">Visão</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team">Equipe</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="values">Valores</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;