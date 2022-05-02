import React from "react";
import { ContentPreview } from "../content-preview/content-preview.component";
import { ContentContainer, ContentHeading } from "./content.styled";
// import {ReactComponent as Picture} from "../../assets/images/illustration-editor-desktop.png"

export const Content = () => {

    return (
        <ContentContainer>
            <ContentHeading>Designed for the future</ContentHeading>
            <ContentPreview/>
        </ContentContainer>
    )
}