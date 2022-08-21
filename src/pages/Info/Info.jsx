import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "./Content/UserInfo";
import Modify from "./Content/Modify";

const Info = () => {
    const [index, setIndex]=useState(0);

    return (
        <InfoContainer>
            <ContentContainer>
                 {index === 0
                 ? <UserInfo/>
                 : <Modify/>
                 }
            </ContentContainer>
        </InfoContainer>
    )
}
export default Info


const InfoContainer=styled.div`
    align-items: center;
    padding: 50px;
`
const ContentContainer=styled.div`
    width: 80%;
    height: auto;
    border: 1px solid #D3D3D3;
    border-radius: 25px;
    padding: 15px 0;
    margin: 0 auto;
`
