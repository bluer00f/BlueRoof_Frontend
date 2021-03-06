import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Flex from '../components/commons/Flex'
import { ColContainer, OverContainer, RowContainer } from "../components/commons/Container";
import { RoundInput } from "../components/commons/Inputs";
import { DropDownBtn } from "../components/commons/Dropdown";
import '../App.css';
import { BlueRoundBtn, BorderWhiteBtn } from "../components/commons/Buttons";

const Signup = () => {
    const SexOptions = ["성별", "남", "여"];
    const [Selected, setSelected] = useState("");
    
    const handleSelect = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };

    const soldiers = ["예", "아니오"]

    const [name, setName] = useState('')

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
    const onClickAddressCheck = () => {
        console.log('주소찾기')
    }

    const houseHolders=["예", "아니오"]
    const [houseHolder, setHouseHolder] = useState("예")
    const onClickHouseHolder=(e)=>{
        setHouseHolder(e.target.value);
    }

    const [soldier, setSoldier] = useState("아니오")
    const [sDate, setSDate] = useState('')

    const onClickSoldier = (e) => {
        setSoldier(e.target.value)
    }

    const onClickSignup = () => {
        console.log("clcik signup")
        window.location.href="/"
    }
    return (
        <SignupContainer>
            <Content>
                <ColContainer style={{width:"80%", margin:"0 auto", marginTop:"15px", gap:"15px"}}>
                    <RowContainer style={{gap:"15px"}}>
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
                    <RowContainer style={{gap:"15px"}}>
                        <RoundInput width={"100px"} height={"50px"} placeholder="우편번호" />
                        <div position="relative" style={{gap:"15px"}}>
                            <RoundInput width={"420px"} height={"50px"} placeholder="현 거주지 주소" />
                            <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"335px"}}/>
                            <BorderWhiteBtn onClick={onClickAddressCheck} style={{width:"100px", height:"50px", position:"absolute", marginLeft:"-115px", padding:"0", border:"transparent", textAlign:"right"}}>주소찾기</BorderWhiteBtn>
                        </div>
                    </RowContainer>
                    <div position="relative" style={{gap:"15px"}}>
                        <RoundBox width={"535px"} height={"50px"}>세대주 여부</RoundBox>
                        <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"115px"}}/>
                        <RadioBtns>     
                            {houseHolders.map((h)=>(
                                <Label style={{marginBottom:"20px"}}>
                                    <RadioBtn
                                        type="radio"
                                        value={h}
                                        checked={houseHolder===h}
                                        onChange={onClickHouseHolder}
                                    ></RadioBtn>
                                    {h}
                                </Label>
                            ))}   
                        </RadioBtns>
                    </div>
                    <RowContainer style={{gap:"15px"}}>
                        <div position="relative" style={{gap:"15px"}}>
                            <RoundBox width={"370px"} height={"50px"}>직업군인 여부</RoundBox>
                            <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"115px"}}/>
                            <RadioBtns style={{marginLeft:"150px"}}>     
                                {houseHolders.map((h)=>(
                                    <Label style={{marginBottom:"20px"}}>
                                        <RadioBtn
                                            type="radio"
                                            value={h}
                                            checked={houseHolder===h}
                                            onChange={onClickSoldier}
                                        ></RadioBtn>
                                        {h}
                                    </Label>
                                ))}   
                            </RadioBtns>
                        </div>
                        <RoundInput width={"150px"} height={"50px"} placeholder="임관일" />
                    </RowContainer>
                    <BtnContainer>
                        <BlueRoundBtn onClick={onClickSignup} style={{width:"100px", height:"30px", marginTop:"15px"}}>계정 만들기</BlueRoundBtn>
                    </BtnContainer>
                </ColContainer>
            </Content>
        </SignupContainer>
    )
}

export default Signup

const SignupContainer=styled.div`
    align-items: center;
    padding: 50px;
`

const Content=styled.div`
    width: 80%;
    border: 1px solid #D3D3D3;
    border-radius: 25px;
    padding: 15px 0;
    margin: 0 auto;
`

const UserImg=styled.div`
    width: 100px;
    height: 100px;
    background-image: url('../imgs/home_bg.jpg');
    border: 1px solid #BECBFF;
    border-radius: 100px;
`
export const RoundBox=styled.div`
    width: ${({ width }) => width};
    height: ${({height})=> height ? height : "70px"};
    padding-left: 3%;
    border: 1px solid #BECBFF;
    border-radius: 40px;
    color: black;
    font-weight: 500;
    line-height: ${({height})=> height ? height : "70px"};
    
`
const RadioBtns=styled(RowContainer)`
    height: 50px;
    margin-left: 200px;
    margin-top: -50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 50px;
`
const RadioBtn=styled.input`
    appearance: none;
    width:15px;
    height:15px;
    border: 2px solid #000000;
    vertical-align: middle;
    border-radius: 100%; 
    margin-right: 10px;
    margin-bottom: 5px;
    :checked{
        background-color: #000000;
    }
`
const Label=styled.label`
`
const BtnContainer=styled(Flex)`
    justify-content: center;
    padding-bottom: 10px;
    text-align: center;
`