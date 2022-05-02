import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavItem = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
font-size: 16px;
color: #ffffff;
padding: none;
margin-right: 25px;

span{
    font-size: 12px;
    margin-left: 5px;
}
` 
export const NavItemLink = styled(Link)`
color: #ffffff;
text-decoration: none;
`