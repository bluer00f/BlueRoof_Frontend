import React from 'react'
import styled from 'styled-components'
import { WhiteText } from './commons/Font'
const ChatIcon = () => {
  return (
    <ChatIconContainer>
        <ContentContainer>
            <WhiteText>챗봇과 <br/> 상담하기</WhiteText>
        </ContentContainer>
    </ChatIconContainer>
  )
}

export default ChatIcon
const ChatIconContainer=styled.div`
    width: 130px;
    height:80px;
    background-color: #0028FF;
    border-radius: 100px;
    position: fixed;
    bottom: 50px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer=styled.div`
    width: 80%;
    height: 80%;
    border-radius: 100px;
    border: 1px solid white;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`