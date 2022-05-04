import React from "react";
import { FrontDisplay } from "../Front-Display/Front-Display.component";
import { NavHeader } from "../Nav-header/Nav-header.component";
import { MainHeaderContainer } from "./Main-header.styled";

export const MainHeader = () => (
    <MainHeaderContainer>
        <NavHeader/>
        <FrontDisplay/>
        
    </MainHeaderContainer>
)