import React from "react";
import styled from 'styled-components'
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { BlackText, GrayText } from "../../components/commons/Font";
import Flex from "../../components/commons/Flex";
import { RoundInput } from "../../components/commons/Inputs";
import { BorderWhiteBtn } from "../../components/commons/Buttons";
import { useState } from "react";

const Chatbot = () => {
    const [inputText, setInputText] = useState("");

    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    return (
        <RowContainer style={{justifyContent: "center"}}>
            <ChatbotContainer>
                <ColContainer>
                    <TopSection>
                        <BlackText weight={"500"} size={"36px"}>청약 AI 챗봇, 청이</BlackText>
                        <GrayText weight={"200"} size={"16px"} marginTop={"10px"}>AI 챗봇 '청이'에게 청약 관련 질문을 남겨보세요.</GrayText>
                        <GrayText weight={"200"} size={"16px"}>챗봇운영시간: 00:00 - 00:00</GrayText>
                    </TopSection>
                    <QnASection>
                        <GrayText weight={"200"} size={"16px"} style={{marginBottom: "10px"}}>| 자주 묻는 질문</GrayText>
                        <RowContainer>
                            <ColContainer>
                                    <div style={{width: "200px", height: "100px", border: "1px solid black", margin: "5px"}}></div>
                                    <div style={{width: "200px", height: "100px", border: "1px solid black", margin: "5px"}}></div> 
                            </ColContainer>
                            <ColContainer>
                                    <div style={{width: "200px", height: "100px", border: "1px solid black", margin: " 30px 5px 5px"}}></div>
                                    <div style={{width: "200px", height: "100px", border: "1px solid black", margin: "5px"}}></div>       
                            </ColContainer>                               
                        </RowContainer>               
                    </QnASection>                
                </ColContainer>
                <Chatting>
                    <Message>

                    </Message>
                    <UserInput>
                        <RoundInput value={inputText} onChange={handleInputText} width={"500px"} height={"50px"} style={{padding: "0 100px 0 30px"}} placeholder="입력하세요." />
                        <div style={{border:"1px solid #BECBFF", height:"50px", position:"absolute", marginLeft:"330px"}}/>
                        <BorderWhiteBtn onClick="#" style={{width:"100px", height:"50px", position:"absolute", marginLeft:"350px", padding:"0", border:"transparent", textAlign:"right"}}>보내기</BorderWhiteBtn>
                    </UserInput>
                </Chatting>
            </ChatbotContainer>
        </RowContainer>        
    )

}

export default Chatbot

const ChatbotContainer=styled(Flex)`
    width:80%;
	flex-direction: row;
	align-items: center;
`
const TopSection=styled.div`
    width: 100%;
    margin: 70px 0 100px 0;
`
const QnASection=styled.div`
    margin: 70px 0 100px 0;
`
const Chatting=styled.div`
    width: 100%;
    height: 75vh;
    border: 1px solid #616771;
    border-radius: 7%;
    margin-left: 30px;
    margin-bottom: 20px;
    padding: 20px;
`
const Message=styled.div`
    width: 100%;
    height: 85%;
`
const UserInput=styled(Flex)`
    width: 100%;
    height: 15%;
	flex-direction: row;
    justify-content: center;
    margin-top:15px;
`