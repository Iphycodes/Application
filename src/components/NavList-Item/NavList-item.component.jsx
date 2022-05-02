import React from "react";
import { NavItem, NavItemLink } from "./NavList-item.styled";
import {FaChevronDown} from 'react-icons/fa'

export const NavListItem = ({name, icon}) => (
    <NavItem>
        <NavItemLink to={`/man`}>{name}</NavItemLink>
        {icon ? <span><FaChevronDown/></span> : null}
    </NavItem>
)