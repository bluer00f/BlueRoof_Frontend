import React, { useState } from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { RoundInput,DateInput } from '../../../components/commons/Inputs'
import { RadioBtn } from '../../../components/commons/Buttons'
import { Dropdown } from 'react-bootstrap'
import { nextView, prevView } from '../../../redux'
import { BlueRoundBtn } from '../../../components/commons/Buttons'
import Flex from '../../../components/commons/Flex'
import { connect } from 'react-redux'

const Asset = ({view, nextView}) => {
  const options=["예", "아니오"];
  const buildingDropDown=["단독주택", "공동주택","오피스텔","공장","상가","부속토지"];
  const [building, setBuilding]=useState("예");
  const [land,setLand]=useState("예");
  const [car, setCar]=useState("예");

  const ClickBuilding=(e)=>{
    setBuilding(e.target.value);
  }
  const ClickLand=(e)=>{
    setLand(e.target.value);
  }
  const ClickCar=(e)=>{
    setCar(e.target.value);
  }

  const ClickNext=()=>{
    nextView();
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
        <ColContainer style={{gap:"20px", margin:"50px 0"}}>
              <RowContainer style={{gap:"10px", width: "90%", whiteSpace:"nowrap", overflowX:"auto"}}>
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
                <RoundInput height={"50px"} placeholder="우편번호"/>
              </RowContainer>
              <RowContainer style={{gap:"10px"}}>
                <RoundInput  height={"50px"} placeholder="주소"></RoundInput>
                <RoundInput  height={"50px"} placeholder="가격"/>
                <RoundInput  height={"50px"} placeholder="건물 취득일"/>
            </RowContainer>
          
            <RowContainer style={{width:"80%", marginTop:"50px"}}>
              <BlackText style={{width:"20%"}}>무주택 시작일</BlackText>
              <DateInput width={"80%"} height={"50px"}  placeholder="무주택 시작일" type="date"/>
          </RowContainer>
        </ColContainer>

        <Line/>

        <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 토지 소유 여부</BlackText>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>공시지가 확인 바로가기</a>
        </RowContainer>
        <RadioBtns style={{marginBottom:"10px"}}>
                      {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={land===option}
                            onChange={ClickLand}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
        </RadioBtns>
          <ColContainer style={{gap:"20px", margin:"50px 0"}}>
            <RowContainer style={{gap:"10px", width: "80%"}}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                    border: "1px solid #BECBFF",backgroundColor:"white",color:"black",borderRadius:"40px", height:"50px"
                  }}>
                    토지유형
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {buildingDropDown.map((option)=>(
                      <Dropdown.Item>{option}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              <RoundInput height={"50px"} placeholder="우편번호"/>
            </RowContainer>
            <RowContainer style={{gap:"10px", width:"80%"}}>
                <RoundInput width={"50%"} height={"50px"} placeholder="주소"></RoundInput>
                <RoundInput  height={"50px"} placeholder="가격"/>
            </RowContainer>
          </ColContainer>

        <Line/>
          <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
            <BlackText size="36px" weight="700">ㅣ 자동차 소유 여부</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>차량 가액 확인 바로가기</a>
          </RowContainer>
          <RadioBtns style={{marginBottom:"10px"}}>
            {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={car===option}
                            onChange={ClickCar}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
            </RadioBtns>
            <ColContainer style={{gap:"20px", margin:"50px 0"}}>
              <RowContainer style={{gap:"10px", width: "80%"}}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                    border: "1px solid #BECBFF",backgroundColor:"white",color:"black",borderRadius:"40px", height:"50px"
                  }}>
                    차량 종류
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {buildingDropDown.map((option)=>(
                      <Dropdown.Item>{option}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RoundInput width={"60%"} height={"50px"} placeholder="가격"/>
              </RowContainer>
            </ColContainer>
             
            <BtnContainer>
              <BlueRoundBtn onClick={ClickNext}>다음 &gt;</BlueRoundBtn>
            </BtnContainer>
           
      
    </AssetContainer>
  )
}

const mapStateToProps=({view})=>{
  return{
    view: view.view
  }
}
const mapDispatchToProps={
  nextView,
}

export default connect(mapStateToProps, mapDispatchToProps)(Asset)
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
const BtnContainer=styled(Flex)`
    justify-content: flex-end;
    padding-bottom: 30px;
`