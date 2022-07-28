import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Flex from '../../../components/commons/Flex'
import { ColContainer, RowContainer } from "../../../components/commons/Container";
import { RoundInput } from "../../../components/commons/Inputs";
import { DropDownBtn } from "../../../components/commons/Dropdown";

const Signup = () => {
    const SexOptions = ["성별", "남", "여"];
    const [Selected, setSelected] = useState("성별");
    
    const handleSelect = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };

    const soldiers = ["예", "아니오"]
    const houseHolderList = [
        {value: "houseHolder", name: "세대주여부"},
        {value: "Y", name: "예"},
        {value: "N", name: "아니오"}]

    const [name, setName] = useState('')

    const [houseHolder, setHouseHolder] = useState("예")
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhonNum] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [address, setAddress] = useState('')
    const [soldier, setSoldier] = useState("아니오")
    const [sDate, setSDate] = useState('')

    const ClickSoldier = (e) => {
        setSoldier(e.target.value)
    }

    return (
        <SignupContainer>
            <ColContainer style={{width:"80%", margin:"0 auto"}}>
                <RowContainer style={{gap:"15px", marginTop:"50px"}}>
                    <UserImg />
                    <RoundInput width={"300px"} height={"50px"} placeholder="이름"/>        
                    <DropDownBtn width={"100px"} heigth={"50px"}>
                        <select onChange={handleSelect} value={Selected}>
                            {SexOptions.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </DropDownBtn>
                </RowContainer>
            </ColContainer>
        </SignupContainer>
    )
}

export default Signup

const SignupContainer=styled.div`
    align-items: center;
`

const UserImg=styled.div`
    width: 100px;
    height: 100px;
    background-image: url('../imgs/home_bg.jpg');
    border: 1px solid #BECBFF;
    border-radius: 100px;
`

const DropBar=styled.div`
    width: 100px;
    height: 50px;
`