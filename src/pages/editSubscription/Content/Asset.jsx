import React, { useState } from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { RoundInput,DateInput } from '../../../components/commons/Inputs'
import { RadioBtn } from '../../../components/commons/Buttons'
import { Dropdown } from 'react-bootstrap'
const Asset = () => {
  const options=["예", "아니오"];
  const buildingDropDown=["단독주택", "공동주택","오피스텔","공장","상가","부속토지"];
  const [building, setBuilding]=useState("예");
  
  const ClickBuilding=(e)=>{
    setBuilding(e.target.value);
  }

  return (
    <AssetContainer>
      <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 나의 소득</BlackText>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>소득 확인 바로가기</a>
      </RowContainer>
      <ColContainer>
        <RoundInput width={"80%"} height={"50px"} placeholder="월 평균 소득(원)"/>
      </ColContainer>
      <Line/>
      <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 건물 소유 여부</BlackText>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>공시지가 확인 바로가기</a>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>소유 건물 기준 확인 바로가기</a>
      </RowContainer>
      <RadioBtns style={{marginBottom:"10px"}}>
        {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={building===option}
                            onChange={ClickBuilding}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
        </RadioBtns>
        <ColContainer style={{gap:"20px", margin:"30px 0"}}>
            <RowContainer style={{gap:"10px", width: "90%"}}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                    border: "1px solid #BECBFF",backgroundColor:"white",color:"black",borderRadius:"40px", height:"50px"
                  }}>
                    건물유형
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {buildingDropDown.map((option)=>(
                      <Dropdown.Item>{option}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RoundInput width={"20%"} height={"50px"} placeholder="우편번호"/>
                <RoundInput width={"45%"} height={"50px"} placeholder="주소"></RoundInput>
                <RoundInput width={"25%"} height={"50px"} placeholder="가격"/>
            </RowContainer>
            <DateInput width={"80%"} height={"50px"}  placeholder="무주택 시작일" type="date"/>
            
        </ColContainer>
    </AssetContainer>
  )
}

export default Asset
const AssetContainer=styled.div`
  padding-top: 50px;
`
const Line=styled.div`
    width: 100%;
    height:1px;
    background-color: #B3B3B3;
   margin: 100px 0;
`
const RadioBtns=styled(RowContainer)`
    margin: 50px 0 100px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`