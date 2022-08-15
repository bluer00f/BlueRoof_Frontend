import React, {useState} from 'react'
import styled from 'styled-components'
import { BlackText } from '../../../components/commons/Font'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import Check3 from './Check3'

const Check4 = () => {
  //임시 데이터 -> 나중에 api로 받아와야함
    const checks=["서울은평뉴타운 디에트르더퍼스트", "힐스테이트 관악뉴포레", "보라매한국 아델리움앤클래스", "용인흥덕2", "서광교파크뷰", "의왕고천A-2블록 행복주택", "abcedf"]
    const citys=["서울", "서울", "서울", "용인", "수원", "의왕", "서울"]
    const types=["APT", "APT", "APT", "APT", "APT", "APT", "APT"]
    const alert1=["• 투기 과열 지구","• 투기 과열 지구","","","• 투기 과열 지구","• 투기 과열 지구"]
    const alert2=["• 청약 과열 지구","", "", "• 청약 과열 지구", "• 청약 과열 지구", "", "• 청약 과열 지구"]
    const areas=["069.9932", "084.9692A", "084.9692B", "084.9513C", "084.9443D"]
    const [isCheck, setIsCheck]=useState([false, false, false, false, false]);
    const clickArea=(i)=>{
        //해당인덱스 값에 클래스네임 지정
        isCheck.map((click, index)=>(
            index===i 
            ? isCheck[index]=true
            : isCheck[index]=false
        ))
        setIsCheck([...isCheck]);
        console.log(isCheck)
    }   
    
  return (
    <CheckContainer>
      <BlackText weight={"500"} size={"30px"}>3. 주택형 선택</BlackText>
      <RowContainer width={"100%"} height={"90%"} style={{marginTop:"20px"}}>
        <ImgBox>
          <CityBox className={"checked"}>
            서울
          </CityBox>
          <AlertBox>
            {alert1[0] != "" ? alert1[0] : ""}
            {alert1[0] != "" ? <br/> : ""}
            {alert2[0] != "" ? alert2[0] : ""}
          </AlertBox>
        </ImgBox>
        <ColContainer width={"55%"} height={"100%"}>
          <InfoBox>
            {checks[0]}
            <br/>
            {"|"+ types[0]}
          </InfoBox>
          <ColContainer style={{justifyContent:"space-between", width: "100%", height:"70%", marginLeft: "50px"}}>
            {areas.map((check, i)=>(
                <Button 
                onClick={()=>clickArea(i)}
                value={i}
                className={isCheck[i] ? "checked" : ""}
                >
                {"○ " + check}
                </Button>
            ))}
          </ColContainer>
        </ColContainer>
      </RowContainer>
    </CheckContainer>
  )
}

export default Check4

const CheckContainer=styled.div`
    width: 90%;
    height: 100%;
`
const ImgBox=styled.div`
    width: 45%;
    height: 100%;
    background-image: url("https://cdn.pixabay.com/photo/2022/07/29/18/11/city-7352352_1280.jpg");
    background-size: cover;
`
const CityBox=styled.div`
width: 50px;
height: 50px;
border-radius: 100%;
background-color: white;
color: gray;
font-size: 16px;
text-align: center;
line-height: 50px;
position: absolute;
z-index: 2;
margin-top: 15px;
margin-left: 15px;
&.checked {
  background-color: #00000000;
  color: white;
  border: 1px solid white;
}
`
const AlertBox=styled.div`
    width: 100%;
    height: 100%;
    font-size: 13px;
    text-align: right;
    color: red;
    padding: 10px;
`
const InfoBox=styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: black;
    margin: 0 0 30px 50px;
`
const Button=styled.button`
    width: 100%;
    font-size: 17px;
    margin-left: 25px;
    background-color: #00000000;
    border: none;
    text-align: left;
    &.checked {
      color: #0028FF;
    }
`