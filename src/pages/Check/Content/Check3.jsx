import React, {useState} from 'react'
import styled from 'styled-components'
import { BlackText } from '../../../components/commons/Font'
import { ColContainer, RowContainer, GridContainer } from '../../../components/commons/Container'

const Check3 = () => {
  //임시 데이터 -> 나중에 api로 받아와야함
    const checks=["서울은평뉴타운 디에트르더퍼스트", "힐스테이트 관악뉴포레", "보라매한국 아델리움앤클래스", "용인흥덕2", "서광교파크뷰", "의왕고천A-2블록 행복주택", "abcedf"]
    const citys=["서울", "서울", "서울", "용인", "수원", "의왕", "서울"]
    const types=["APT", "APT", "APT", "APT", "APT", "APT", "APT"]
    const alert1=["", "• 투기 과열 지구","• 투기 과열 지구","","","• 투기 과열 지구","• 투기 과열 지구"]
    const alert2=["", "• 청약 과열 지구","", "", "• 청약 과열 지구", "• 청약 과열 지구", "", "• 청약 과열 지구"]
    const [isCheck, setIsCheck]=useState([false, false, false, false, false, false, false]);
    const clickBox=(i)=>{
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
    <BlackText weight={"500"} size={"30px"}>2. 주택 선택</BlackText>
      <Box>
        <GridContainer style={{width: "100%", height:"100%"}}>
            {checks.map((check, i)=>(
                <RoundBox 
                onClick={()=>clickBox(i)}
                value={i}
                className={isCheck[i] ? "checked" : ""}
                >
                  <AlertBox>
                    {alert1[i] != "" ? alert1[i] : ""}
                    {alert1[i] != "" ? <br/> : ""}
                    {alert2[i] != "" ? alert2[i] : ""}
                  </AlertBox>
                  <CityBox
                    className={isCheck[i] ? "checked" : ""}>
                    {citys[i]}
                  </CityBox>
                  <InfoBox
                    className={isCheck[i] ? "checked" : ""}>
                      {check}
                  </InfoBox>
                  <TypeBox
                    className={isCheck[i] ? "checked" : ""}>
                      {"|"+types[i]}
                  </TypeBox>
                </RoundBox>
            ))}
        </GridContainer>
      </Box>
    </CheckContainer>
   
  )
}

export default Check3
const CheckContainer=styled.div`
    width: 90%;
    height: 100%;
`
const Box=styled.div`
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    margin-top: 30px;
`
const RoundBox=styled.button`
    width: 95%;
    height: 170px;
    background-image: url("https://cdn.pixabay.com/photo/2022/07/29/18/11/city-7352352_1280.jpg");
    background-size: cover;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 24px;
    border: none;
    box-shadow: 3px 3px #D8D8D890;
    padding: 0;
    display: flex;
    align-items: end;
    position: relative;
`
const AlertBox=styled.div`
    width: 100%;
    height: 100%;
    font-size: 11px;
    text-align: right;
    color: red;
    padding: 10px;
`
const CityBox=styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: white;
    color: gray;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
    position: absolute;
    z-index: 2;
    margin-bottom: 48px;
    margin-left: 10px;
    &.checked {
      background-color: #00000000;
      color: white;
      border: 1px solid white;
    }
`
const InfoBox=styled.div`
    width: 100%;
    height: 40%;
    border-radius: 0 0 5px 5px;
    font-size: 16px;
    text-align: left;
    overflow-y: scroll;
    padding: 20px 30% 0 10px;
    position: absolute;
    z-index: 1;
    background-color: white;
    color: black;
    &.checked {
      background-color: #00000000;
      color: white;
    }
`
const TypeBox=styled.div`
    width: 100%;
    height: 40%;
    font-size: 16px;
    text-align: right;
    padding: 20px 10px 0 0;
    position: absolute;
    z-index: 1;
    color: black;
    &.checked {
      color: white;
    }
`