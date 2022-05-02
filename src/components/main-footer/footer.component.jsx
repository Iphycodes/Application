import React from "react";
import { List } from "../../List/list.component";
import { FooterContainer } from "./main-footer.styled";
import {ReactComponent as Logo} from '../../assets/logo.svg'


export const Footer = () => {

    return (
        <FooterContainer>
            <List listName={'product'}/>
            <List listName={'category'}/>
            <List listName={'contact'}/>            
            <Logo/>
        </FooterContainer>
    )
}