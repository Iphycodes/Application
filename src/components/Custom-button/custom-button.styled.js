import styled, { css } from "styled-components";

const InvertedButton = css`
background-color: #ff6d66;
color: #ffffff;
border: 1px solid #ffffff;
`

const getButtonStyle = props => {
    if(props.inverted){
        return InvertedButton;
    }
}

export const StyledButton = styled.button`
background-color: #ffffff;
color: #ff6d66;
padding: 12px 20px;
font-size: 16px;
font-weight: 600;
border: none;
border-radius: 30px;

${getButtonStyle}
`

