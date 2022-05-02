import React from "react";
import { DescriptionContainer, DescriptionImage, DescriptionItemContainer } from "./Description-item.styled";

export const DescriptionItem = ({image, descriptions, background, position}) => (

    <DescriptionItemContainer background={background} position={position}>
        <DescriptionContainer background={background}> 
            {descriptions.map(({id, title, descBody}) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{descBody}</p>
                </div>
            ))}
        </DescriptionContainer>

        <DescriptionImage background={background} imgUrl={process.env.PUBLIC_URL + `/images/${image}`} position={position}>
        </DescriptionImage>
        
        
    </DescriptionItemContainer>
)

{/* <img position={position} src={process.env.PUBLIC_URL + `../../assets/images/illustration-editor-desktop.png`} alt="pic" /> */}




// style={{backgroundImage: `url(../../assets/images/${image})`}}
//style={{backgroundImage: `url(../../assets/images/${image})`}}
   

