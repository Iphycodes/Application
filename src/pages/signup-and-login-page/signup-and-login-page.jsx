import React from "react";
import { AdvertContainer, FormContainer, MainContainer, PageBackground } from "./signup-and-login-page.styled";
import './signup-and-login-page.style.scss'
import { Advert } from "../../components/Advert/advert.component";


const SignUpAndSignIn = () => {

    return (
      <PageBackground>
        <MainContainer>
          <AdvertContainer>
            <Advert/>
          </AdvertContainer>
         <FormContainer>

         </FormContainer>
        </MainContainer>
      </PageBackground>
    )
}

export default SignUpAndSignIn;