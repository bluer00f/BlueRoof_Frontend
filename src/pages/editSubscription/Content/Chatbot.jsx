import React from "react";
import styled from 'styled-components'
import { ColContainer, RowContainer } from "../../../components/commons/Container";
import { BlackText, GrayText } from "../../../components/commons/Font";
import Flex from "../../../components/commons/Flex";

const Chatbot = () => {

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
`