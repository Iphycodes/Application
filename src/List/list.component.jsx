import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContactContainer, ListHolder, SocialHandle, StyledContainer } from "./list.styled";
// import myData from '../WEB_DATA.json'
import { CONTACT_DATA } from "../CONTACT_DATA";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


export const List = ({listName}) => {
    const [data, setData] = useState([]);
    const [contacts, setContacts] = useState({})

    useEffect(() => {
        axios.get('./WEB_DATA.json')
        .then(response => {
            const data = response.data
            setData(data)
        })
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        setContacts(CONTACT_DATA)
    }, [])


    return (
    <StyledContainer>  
        <h2>{listName}</h2>
        <ListHolder>
            {(() => {
                
                switch (listName) {
                case 'product':
                    return  data.map(({idp, products, category}) => (
                            products.filter((product, idx) => category === 'Laptop' ? idx < 1 : idx < 2)
                            .map(({id, name}) => (
                                <li key={id}>{name}</li>
                                ))
                            ))

                case 'category':
                    return  data.map(({id, category}) => {
                            return <li key={id}>{category}</li>
                            })

                case 'contact':
                    const keys = []
                    const values = []
                    Object.entries(contacts).forEach(([key, value]) => {
                        keys.push(key)
                        values.push(value)
                    })


                    return keys.map((key, idx) => (
                        <li  key={idx}>
                        <ContactContainer>
                            {(key === 'FaceBook' && <FaFacebook/>)
                            || (key === 'Whatsapp' && <FaWhatsapp/>)
                            || (key === 'Instagram' && <FaInstagram />)
                            || (key === 'Twitter' && <FaTwitter/>)
                            }
                            <SocialHandle>
                                <p>{key}</p>
                                <span>{values[idx]}</span>
                            </SocialHandle>
                        </ContactContainer>
                        </li>
                    ))
            
                default:
                    break;
            }
            })()}   
        </ListHolder>
    </StyledContainer>
    )
}