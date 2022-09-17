import React, { useState } from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { RadioBtn } from '../../../components/commons/Buttons'
import { RoundInput } from '../../../components/commons/Inputs'
import { BlueRoundBtn } from '../../../components/commons/Buttons'
import Flex from '../../../components/commons/Flex'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Table from '../Component/Table'
const Family = () => {
    const whether=["예", "아니오"];
    const [isMarried, setIsMarried]=useState("예");
    const [isHead, setIsHead]=useState("예");
    const [isForeign , setIsForeign]=useState("예");
    const [isWon, setIsWon]=useState("예");
    

    const ClickMarried=(e)=>{
        setIsMarried(e.target.value);
    }
    const ClickHead=(e)=>{
        setIsHead(e.target.value);
    }
    const ClickForeign=(e)=>{
        setIsForeign(e.target.value);
    }
    const ClickWon=(e)=>{
        setIsWon(e.target.value);
    }

    const cellEditProp = {
        mode: 'click'
      };
  return (
    <FamilyContainer>
        <BlackText size="36px" weight="700">ㅣ 혼인 여부</BlackText>
         <RadioBtns>
        {whether.map((w)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={w}
                            checked={isMarried===w}
                            onChange={ClickMarried}
                        ></RadioBtn>
                        {w}
                    </label>
                ))}        
        </RadioBtns> 
        <BlackText size="36px" weight="700">ㅣ 배우자 정보</BlackText>
        <ColContainer>
            <Content>
                <RowContainer style={{width:"100%"}}>
                    <InputTitle>이름</InputTitle>
                    <Input></Input>
                </RowContainer>
                <RowContainer style={{width:"100%", gap:"10%"}}>
                    <InputTitle>세대주 여부</InputTitle>
                    {whether.map((w)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={w}
                            checked={isHead===w}
                            onChange={ClickHead}
                        ></RadioBtn>
                        {w}
                    </label>
                ))}
                </RowContainer>
                <RowContainer style={{width:"100%", gap:"10%"}}>
                    <InputTitle>외국인 여부</InputTitle>
                    {whether.map((w)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={w}
                            checked={isForeign===w}
                            onChange={ClickForeign}
                        ></RadioBtn>
                        {w}
                    </label>
                ))}
                </RowContainer>
                <RowContainer style={{width:"100%", gap:"10%"}}>
                    <InputTitle>분리세대 여부</InputTitle>
                    {whether.map((w)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={w}
                            checked={isForeign===w}
                            onChange={ClickForeign}
                        ></RadioBtn>
                        {w}
                    </label>
                    ))}
                </RowContainer>
                <RowContainer style={{width:"100%"}}>
                    <InputTitle>주민등록번호</InputTitle>
                    <Input style={{width:"23%"}}></Input>
                    <div style={{margin:"0 2%"}}>-</div>
                    <Input style={{width:"23%"}}></Input>
                </RowContainer>
                <RowContainer style={{width:"100%"}}>
                    <InputTitle>혼인신고일</InputTitle>
                    <Input placeholder='YYYY-MM-DD'></Input>
                </RowContainer>
                <RowContainer style={{width:"100%", gap:"10%"}}>
                    <InputTitle>청액당첨이력</InputTitle>
                    {whether.map((w)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={w}
                            checked={isForeign===w}
                            onChange={ClickForeign}
                        ></RadioBtn>
                        {w}
                    </label>
                    ))}
                </RowContainer>
                <Input placeholder='YYYY-MM-DD' style={{marginLeft:"10%"}}></Input>
                <RowContainer width={"100%"}>
                    <InputTitle>월 평균 소득</InputTitle>
                    <Input style={{marginRight:"5px"}}></Input>
                    <div>원</div>
                </RowContainer>
            </Content>
        </ColContainer>
        <Line/>
     
     <Table/>
     
        <BtnContainer>
            <BlueRoundBtn>저장하기</BlueRoundBtn>
        </BtnContainer>
        
    </FamilyContainer>
  )
}

export default Family
const FamilyContainer=styled.div`
    padding-top: 50px;
`
const RadioBtns=styled(RowContainer)`
    margin: 50px 0 100px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Content=styled(ColContainer)`
    width: 80%;
    margin-top: 50px;
    gap:40px;
`
const InputTitle=styled(BlackText)`
    font-size: 24px;
    width: 30%;
`
const Input=styled(RoundInput)`
    height: 50px;
    width: 50%;
`
const BtnContainer=styled(Flex)`
    justify-content: flex-end;
    padding-bottom: 30px;
    margin-top: 50px;
`
const Line=styled.div`
    width: 100%;
    height:1px;
    background-color: #B3B3B3;
   margin: 100px 0;
`