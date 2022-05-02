import styled from "styled-components";


export const ListHolder = styled.ul`
color: #ffffff;
font-size: 16px;
padding: 0;
margin: 0;
list-style-type: none;

li{
margin-bottom: 10px;
}
`

export const StyledContainer = styled.div`

h2{
color: #ffffff;
font-size: 18px;
}
`

export const ContactContainer = styled.div`
display: flex;
align-items: flex-start;
column-gap: 4px;
font-size: 16px;
color: white;

span{
    font-size: 8px;
}

`

export const SocialHandle = styled.div`
display: flex;
flex-direction: column;

p{
    font-size: 12px;
    margin-bottom: 2px;
    margin-top: 0;
}

span{
    font-size: 8px;
}
`