import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, isOpen } from './style'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Quem Somos</SidebarLink>
                    <SidebarLink to="mission" onClick={toggle}>Missão</SidebarLink>
                    <SidebarLink to="vision" onClick={toggle}>Visão</SidebarLink>
                    <SidebarLink to="team" onClick={toggle}>Equipe</SidebarLink>
                    <SidebarLink to="values" onClick={toggle}>Valores</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;