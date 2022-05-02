import React from "react";
import { CustomButton } from "../Custom-button/custom-button.component";
import { ButtonContainer, DisplayContainer } from "./Front-Display.styled";

export const FrontDisplay = () => (
    <DisplayContainer>
        <h1>A modern Publishing platform</h1>
        <span>Grow your audience and build your office brand</span>
        <ButtonContainer>
            <CustomButton>Start for Free</CustomButton>
            <CustomButton inverted>Learn more</CustomButton>
        </ButtonContainer>
    </DisplayContainer>
)

