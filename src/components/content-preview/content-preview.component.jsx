import React, { useState } from "react";
import { useEffect } from "react";
import CONTENT_DATA from "../../CONTENT_DATA";
// import { useSelector } from "react-redux";
import { DescriptionItem } from "../description-item/Description-item.component";
import { ContentPreviewContainer } from "./content-preview.styled";


export const ContentPreview = () => {
    // const contents = useSelector(state => state.content.contents)
    const [contents, setContents] = useState([])

    useEffect(() => {
        setContents(CONTENT_DATA)
    }, [])

    return (
        <ContentPreviewContainer>
            {contents.map(({id, ...rest}) => {
            return (
                <DescriptionItem key={id} {...rest}/>
            )})}
        </ContentPreviewContainer>
    )
}