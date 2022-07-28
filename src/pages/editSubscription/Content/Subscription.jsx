import React, { useState } from 'react'
import styled from 'styled-components'
import { BlueRoundBtn, RadioBtn } from '../../../components/commons/Buttons'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import Flex from '../../../components/commons/Flex'
import { RoundInput } from '../../../components/commons/Inputs'
import { connect } from 'react-redux'
import { nextView, prevView } from '../../../redux'

const Subscription = ({view, nextView}) => {
    const ranks=["1순위","2순위"];
    const banks=["주택청약종저축", "청약저축", "청약예금", "청약부금"];

    const [specialRanking, setSpecialRanking]=useState("1순위");
    const [ranking, setRanking]=useState("1순위");
    const [rankHistory, setRankHistory]=useState("1순위");
    const [bank, setBank]=useState("주택청약종합저축");

    const ClickSpecialRank=(e)=>{
        setSpecialRanking(e.target.value);
    }
    const ClickRank=(e)=>{
        setRanking(e.target.value);
    }
    const ClickRankHistory=(e)=>{
        setRankHistory(e.target.value);
    }
    const ClickBank=(e)=>{
        setBank(e.target.value);
    }
    const ClickNext=()=>{
        nextView();
    }
  return (
      <SubscriptionContainer>
        <RowContainer style={{gap:"10px"}}>
            <BlackText size="36px" weight="700">ㅣ 특별 공급 순위</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>순위 확인 바로가기</a>
        </RowContainer>
        <RadioBtns>
        {ranks.map((rank)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={rank}
                            checked={specialRanking===rank}
                            onChange={ClickSpecialRank}
                        ></RadioBtn>
                        {rank}
                    </label>
                ))}        
        </RadioBtns> 
        <RowContainer style={{gap:"10px"}} >
            <BlackText size="36px" weight="700">ㅣ 일반 공급 순위</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>순위 확인 바로가기</a>
        </RowContainer>
        <RadioBtns>
        {ranks.map((rank)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={rank}
                            checked={ranking===rank}
                            onChange={ClickRank}
                        ></RadioBtn>
                        {rank}
                    </label>
                ))}        
        </RadioBtns>
       <Line/>
        <BlackText size="36px" weight="700">ㅣ 2년 내 당첨 이력</BlackText>
        <RadioBtns style={{marginBottom:"10px"}}>
        {ranks.map((rank)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={rank}
                            checked={rankHistory===rank}
                            onChange={ClickRankHistory}
                        ></RadioBtn>
                        {rank}
                    </label>
                ))}        
        </RadioBtns>
        <ColContainer style={{gap:"20px", margin:"30px 0"}}>
            <RoundInput width={"80%"} height={"50px"} placeholder="당첨일자"/>
            <RoundInput width={"80%"} height={"50px"} placeholder="당첨지역"/>
            <RowContainer style={{gap:"10px", width: "80%"}}>
                <RoundInput width={"20%"} height={"50px"} placeholder="우편번호"></RoundInput>
                <RoundInput width={"80%"} height={"50px"} placeholder="당첨아파트명"/>
            </RowContainer>
        </ColContainer>
        <Line/>
        <BlackText size="36px" weight="700">ㅣ 청약 통장 종류</BlackText>
        <RadioBtns>
        {banks.map((b)=>(
                    <label style={{marginBottom:"20px"}}>
                        <RadioBtn
                            type="radio"
                            value={b}
                            checked={bank===b}
                            onChange={ClickBank}
                        ></RadioBtn>
                        {b}
                    </label>
                ))}        
        </RadioBtns>
        <RowContainer style={{gap:"10px",marginBottom:"50px"}}>
            <BlackText size="36px" weight="700">ㅣ 청약 통장 가입일</BlackText>
            <a href="https://www.naver.com" style={{fontSize:"14px"}}>가입일 확인 바로가기</a>
        </RowContainer>
        <ColContainer style={{marginBottom:"50px"}}>
            <RoundInput width={"80%"} height={"50px"} placeholder="가입일자"/>
        </ColContainer>
        <BtnContainer>
            <BlueRoundBtn onClick={ClickNext}>다음 &gt;</BlueRoundBtn>
        </BtnContainer>
      </SubscriptionContainer>
   
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
export default connect(mapStateToProps, mapDispatchToProps)(Subscription)

const SubscriptionContainer=styled.div`
    padding-top: 50px;
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
const Line=styled.div`
    width: 100%;
    height:1px;
    background-color: #B3B3B3;
   margin: 100px 0;
`