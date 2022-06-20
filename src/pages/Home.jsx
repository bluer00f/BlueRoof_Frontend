import React from 'react'
import styled from "styled-components"
import { ColContainer } from '../components/Container'
import "../home.css"

const Home = () => {
  return (
    <ColContainer>
        <TopWrapper>
            <TopContent>
                <h1>Welcome to BlueRoof!</h1>
                <h4>당신의 청약정보를 알고 싶으신가요?<br></br> 저희 서비스를 이용해보세요 </h4>
                <button>검사하러가기</button>
            </TopContent>
        </TopWrapper>
    </ColContainer>
  )
}

export default Home
const TopWrapper=styled.div`
    width: 100%;
    height: 80vh;
    background-image: url('../imgs/home_bg.jpg');
`
const TopContent=styled(ColContainer)`
    
`