import React from "react";
import { StyledButton } from "./custom-button.styled";

export const CustomButton = ({children, ...rest}) => (
    <StyledButton {...rest}>
        {children}
    </StyledButton>
)



