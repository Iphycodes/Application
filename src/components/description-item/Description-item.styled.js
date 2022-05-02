import styled, { css } from "styled-components";

const right = css`
right: -22%;
`

const leftOuter = css`
    left: -5%;
    `

const leftInner = css`
    left: -30%;
`



const getImagePosition = (props) => {

    console.log(props.position)
    if(props.position === 'left'){
    
        return right;
    }
    
    return (props.background ? leftOuter : leftInner);
}


export const DescriptionItemContainer = styled.div`
display: flex;
flex-direction: ${props => props.position === 'left' ? 'row' : 'row-reverse'};
background-color: ${props => props.background ? '#3A3D5C' : 'transparent'};
align-items: center;
padding: 10px 50px;
position: relative;
justify-content: space-between;
max-width: 100vw;
overflow-x: hidden;
overflow-y: hidden;
margin: 40px 0;
height: auto;
`


export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;

h2{
font-size: 24px;
margin-bottom: 35px;
text-align: left;
color: ${props => props.background ? '#ffffff' : '#393a56'};

}

p{
    font-size: 12px;
    color: ${props => props.background ? '#ffffff' : '#838383'};
}
`

export const DescriptionImage = styled.div`
width: 50%;
display: flex;
height: 600px;
margin: 0;
position: relative;
align-items: center;
justify-content: center;
overflow-y: visible;
background-image: url(${(props)=> props.imgUrl});
background-position: center;
background-size: cover;
${getImagePosition}

img{
    width: 120%;
}
`


//background-image: url(${picture});
//${getImagePosition}
