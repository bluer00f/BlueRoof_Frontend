import React from 'react'
import styled from 'styled-components'
import { RowContainer, ColContainer } from '../../components/commons/Container'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
const Landing1 = () => {
  return (
    
      
    <Landing1Container>
     
     <Left>
     <div style={{fontSize:"52px", marginBottom:"30px"}}>welcome to <br/> BlueRoof!</div>
     <div style={{fontSize:"14px", color:"#616771", lineHeight:"28px"}}>당신의 청약 점수를 알고싶으신가요?<br/>BlueRoof를 이용하세요!</div>
     <Btns>
         <Btn>정보 입력없는<br/>간편검사하기</Btn>
         <Link to='/login'>
         <Btn>정보 입력하고<br/>상세검사하기</Btn>
         </Link>

     </Btns>
     </Left>
     <Right>
      <Border>
      <Img src='../../imgs/home_bg.svg'></Img>
      </Border>
         
     </Right>
</Landing1Container>
    
  )
}

export default Landing1

const Landing1Container=styled(RowContainer)`
  width: 80%;
  height: 100%;
  gap: 10%;
`
const Left=styled(ColContainer)`
  align-items: flex-start;
  width: 50%;
`
const Right=styled.div`
  width: 40%;
  height: 70%;
`
const Btns=styled(RowContainer)`
  width: 100%;
  margin-top: 60px;
  gap: 5%;
`
const Btn=styled.button`
  background: #0028FF;
  border-radius: 72px;
  border: none;
  color: white;
  padding: 10px 30px;
`
const Border=styled.div`
    border: 1px solid #282A2D;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
`
const Img=styled.img`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    right: 20px;
    top: 20px;
`
const HomeHeader=styled(Header)`

`