import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import Flex from "../../../components/commons/Flex";
import { ColContainer, OverContainer, RowContainer } from "../../../components/commons/Container";
import { RoundInput } from "../../../components/commons/Inputs";
import { Dropdown } from 'react-bootstrap'
import "../../../App.css"
import { BlueRoundBtn, BorderWhiteBtn } from "../../../components/commons/Buttons";
import Avatar from "react-avatar"; //npm install react-avatar --save
import PopupUser from "./PopupUser";


const Check = () => {

    // 서버에 저장된 정보 받아오는 코드로 변경해야함
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png");
    const fileInput = useRef(null);
    const [popup, setPopup] = useState(false)

    const onClickPopupOpen = () => {
        setPopup(true);
    }
    const onClickPopupClose = () => {
        setPopup(false);
    }
    const onClickUnregister = () => {
        console.log("탈퇴");
        setPopup(false);
    }
    const onClickProfile = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }
        else {
            setImage("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png")
            return
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const SexDropDown = ["남", "여"];

    const soldiers = ["예", "아니오"]

    const [name, setName] = useState('')

    const [id, setId] = useState('')

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

    const onClickModify = () => {
        console.log("clcik modify")
        window.location.href="/Check"
    }

    return (
        <ColContainer style={{width:"80%", margin:"0 auto", marginTop:"15px", gap:"15px"}}>
            <RowContainer style={{gap:"15px"}}>
                <input type="file" style={{display: "none"}}
                        accept="image/jpg, image/png, image/jpeg"
                        name="prifileImg"
                        onChange={onClickProfile}
                        ref={fileInput}/>
                <Avatar src={Image} style={{magin: "20px"}} size={110} round={"100%"}
                        onClick={() => {fileInput.current.click()}} />
                <ColContainer style={{gap:"15px"}}>
                    <RowContainer style={{gap:"15px"}}>
                        <RoundInput style={{border:"none"}} width={"300px"} height={"50px"} placeholder="이름"/>

                        
                        <RoundInput style={{border:"none", width:"100px", height:"50px"}} placeholder="여"/>
                        

                    </RowContainer>
                    <RowContainer>
                        <RoundInput style={{border:"none"}} width={"420px"} height={"50px"} placeholder="생년월일"/>
                    </RowContainer>
                </ColContainer>
            </RowContainer>
            <div position="relative">
                <RoundInput width={"535px"} height={"50px"} placeholder="아이디"/>
            </div>
            <div>
                <RoundInput width={"535px"} height={"50px"} placeholder="비밀번호"/>
            </div>
            <div position="relative">
                <RoundInput width={"535px"} height={"50px"} placeholder="이메일"/>
            </div>
            <div position="relative">
                <RoundInput width={"535px"} height={"50px"} placeholder="전화번호"/>
            </div>
            <RowContainer style={{gap:"15px"}}>
                <RoundInput width={"100px"} height={"50px"} placeholder="우편번호" />
                <div position="relative" style={{gap:"15px"}}>
                    <RoundInput width={"420px"} height={"50px"} placeholder="현 거주지 주소" />
                </div>
            </RowContainer>
            <div position="relative" style={{gap:"15px"}}>
                <RoundBox width={"535px"} height={"50px"}>세대주 여부</RoundBox>
                <div style={{borderLeft:"1px solid #BECBFF", height:"50px", position:"absolute", marginTop:"-50px", marginLeft:"115px"}}/>
                <RadioBtns>     
                    {houseHolders.map((h)=>(
                        <Label style={{marginBottom:"20px"}} key={h.id}>
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
                            <Label style={{marginBottom:"20px"}}key={h.id}>
                                <RadioBtn
                                    type="radio"
                                    value={h}
                                    checked={soldier===h}
                                    onChange={onClickSoldier}
                                ></RadioBtn>
                                {h}
                            </Label>
                        ))}   
                    </RadioBtns>
                </div>
                <RoundInput width={"150px"} height={"50px"} placeholder="임관일" />
            </RowContainer>
            <Box width={"535px"} style={{marginTop:"15px"}}>
                <Box width={"30%"}/>
                <BtnContainer width={"40%"}>
                    <BlueRoundBtn onClick={onClickModify} style={{width:"100px", height:"30px"}}>수정하기</BlueRoundBtn>
                </BtnContainer>
                    <React.Fragment>
                        <p onClick={onClickPopupOpen} style={{textDecorationLine:"underline", width:"30%", textAlign: "right", fontSize:"15px", fontWeight:"bold", color:"red", paddingRight:"10px"}}>회원탈퇴</p>
                        <PopupUser open={popup} close={onClickPopupClose} unregister={onClickUnregister} header="회원탈퇴">
                            정말 탈퇴하시겠습니까?
                        </PopupUser>
                    </React.Fragment>
            </Box>
        </ColContainer>
    )
}

export default Check

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
export const RadioBtn=styled.input`
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
const Box=styled(RowContainer)`
`
const BtnContainer=styled(Flex)`
    justify-content: center;
    padding-bottom: 10px;
    text-align: center;
`