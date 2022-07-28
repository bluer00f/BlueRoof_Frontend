import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Flex from '../../../components/commons/Flex'
import { ColContainer, OverContainer, RowContainer } from "../../../components/commons/Container";
import { RoundInput } from "../../../components/commons/Inputs";
import { DropDownBtn } from "../../../components/commons/Dropdown";
import '../../../App.css';
import { BorderWhiteBtn } from "../../../components/commons/Buttons";

const Signup = () => {
    const SexOptions = ["성별", "남", "여"];
    const [Selected, setSelected] = useState("");
    
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
    const onClickIdCheck = () => {
        console.log('ID 중복확인')
    }

    const [pw, setPw] = useState('')
    const [email, setEmail] = useState('')
    const onClickEmailCheck = () => {
        console.log('email 중복확인')
    }

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
            <ColContainer style={{width:"80%", margin:"0 auto", gap:"15px"}}>
                <RowContainer style={{gap:"15px", marginTop:"50px"}}>
                    <UserImg />
                    <ColContainer style={{gap:"15px"}}>
                        <RowContainer style={{gap:"15px"}}>
                            <RoundInput width={"300px"} height={"50px"} placeholder="이름"/>        
                            <select onChange={handleSelect} value={Selected}>
                                {SexOptions.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </RowContainer>
                        <RowContainer>
                            <RoundInput width={"420px"} height={"50px"} placeholder="생년월일"/>
                        </RowContainer>
                    </ColContainer>
                </RowContainer>
                <div position="relative">
                    <RoundInput width={"535px"} height={"50px"} placeholder="아이디"/>
                    <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"450px"}}/>
                    <BorderWhiteBtn onClick={onClickIdCheck} style={{width:"100px", height:"50px", position:"absolute", marginLeft:"-115px", padding:"0", border:"transparent", textAlign:"right"}}>중복확인</BorderWhiteBtn>
                </div>
                <div>
                    <RoundInput width={"535px"} height={"50px"} placeholder="비밀번호"/>
                </div>
                <div position="relative">
                    <RoundInput width={"535px"} height={"50px"} placeholder="이메일"/>
                    <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"450px"}}/>
                    <BorderWhiteBtn onClick={onClickEmailCheck} style={{width:"100px", height:"50px", position:"absolute", marginLeft:"-115px", padding:"0", border:"transparent", textAlign:"right"}}>중복확인</BorderWhiteBtn>
                </div>
                <div position="relative">
                    <RoundInput width={"535px"} height={"50px"} placeholder="전화번호"/>
                    <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"450px"}}/>
                    <BorderWhiteBtn onClick={onClickEmailCheck} style={{width:"100px", height:"50px", position:"absolute", marginLeft:"-115px", padding:"0", border:"transparent", textAlign:"right"}}>인증하기</BorderWhiteBtn>
                </div>
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
