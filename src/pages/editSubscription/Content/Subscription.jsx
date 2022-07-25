import React, { useState } from 'react'
import styled from 'styled-components'
import { BlueRoundBtn } from '../../../components/commons/Buttons'
import { RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import Flex from '../../../components/commons/Flex'
const Subscription = () => {
    const ranks=["1위","2위"];
    const [specialRanking, setSpecialRanking]=useState("1위");
    const [ranking, setRanking]=useState("1위");

    const ClickSpecialRank=(e)=>{
        setSpecialRanking(e.target.value);
    }
    const ClickRank=(e)=>{
        setRanking(e.target.value);
    }
  return (
      <SubscriptionContainer>
        <RowContainer style={{gap:"10px"}}>
            <BlackText size="36px" weight="700">ㅣ 특별 공급 순위</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>순위 확인 바로가기</a>
        </RowContainer>
        <RadioBtns>
        {ranks.map((rank)=>(
                    <Label>
                        <RadioBtn
                            type="radio"
                            value={rank}
                            checked={specialRanking===rank}
                            onChange={ClickSpecialRank}
                        ></RadioBtn>
                        {rank}
                    </Label>
                ))}        
        </RadioBtns> 
        <RowContainer style={{gap:"10px"}} >
            <BlackText size="36px" weight="700">ㅣ 일반 공급 순위</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>순위 확인 바로가기</a>
        </RowContainer>
        <RadioBtns style={{marginBottom:"70px"}}>
        {ranks.map((rank)=>(
                    <Label>
                        <RadioBtn
                            type="radio"
                            value={rank}
                            checked={ranking===rank}
                            onChange={ClickRank}
                        ></RadioBtn>
                        {rank}
                    </Label>
                ))}        
        </RadioBtns>
        <BtnContainer>
            <BlueRoundBtn>임시저장</BlueRoundBtn>
        </BtnContainer>
        
      </SubscriptionContainer>
   
  )
}

export default Subscription
const SubscriptionContainer=styled.div`
    
`
const RadioBtns=styled(RowContainer)`
    gap:10%;
    margin: 50px 0 130px 10%;
`
const RadioBtn=styled.input`
    appearance: none;
    width:20px;
    height:20px;
    border: 2px solid #000000;
    vertical-align: middle;
    border-radius: 100%; 
    margin-right: 10px;
    margin-bottom: 5px;
    :checked{
        background-color: #000000;
    }
`
const Label=styled.label`
`
const BtnContainer=styled(Flex)`
    justify-content: flex-end;
`