import React from 'react'
import styled from "styled-components"
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlueRoundBtn} from '../../../components/commons/Buttons'
import { useState } from 'react'
import { RoundInput } from '../../../components/commons/Inputs'
import Flex from '../../../components/commons/Flex'
import { BlueText } from '../../../components/commons/Font'

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.vaule)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.vaule)
    }

    const onClickLogin = () => {
        console.log('click login')
    }

    return (
        <LoginContainer>
            <ColContainer style={{gap:"10px", margin:"30px 0"}}>
                <RoundInput value={inputId} _onChange={handleInputId} width={"400px"} height={"50px"} placeholder="아이디"/>
                <RoundInput value={inputPw} _onChange={handleInputPw} width={"400px"} height={"50px"} placeholder="비밀번호"/>
            </ColContainer>
            <BtnContainer style={{gap:"20px"}}>
                <BlueRoundBtn onClick={onClickLogin} style={{width:"360px", height:"30px"}}>로그인</BlueRoundBtn>
            </BtnContainer>
            <RowContainer style={{gap:"10px"}}>
                <CenterContainer style={{margin:"0 auto"}}>
                    <BlueText style={{fontSize:"15px", fontWeight:"bold"}}>아직 계정이 없습니까?</BlueText>
                    <a href="/signup" style={{fontSize:"15px", fontWeight:"bold", color:"#0028FF", marginLeft:"10px"}}>회원가입</a>
                </CenterContainer>
            </RowContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer=styled.div`
    margin-top: 15%;
`

const BtnContainer=styled(Flex)`
    justify-content: center;
    padding-bottom: 10px;
    text-align: center;
`
const CenterContainer=styled(Flex)`
`