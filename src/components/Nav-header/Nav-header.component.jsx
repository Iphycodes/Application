import React from "react";
import { NavHeaderContainer, NavListContainer } from "./Nav-header.styled";
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { NavListItem } from "../NavList-Item/NavList-item.component";
import { CustomButton } from "../Custom-button/custom-button.component";

export const NavHeader = () => {

    return (
        <NavHeaderContainer>
            <Logo/>
            <NavListContainer>
                <NavListItem name='Products' icon/>
                <NavListItem name='Category' icon/>
                <NavListItem name='Contacts' icon/>
            </NavListContainer>
            <NavListContainer>
                <NavListItem name='Login'/>
                <CustomButton>Sign Up</CustomButton>
            </NavListContainer>
        </NavHeaderContainer>
    )
}