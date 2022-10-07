import React, { useState } from 'react'
import styled from 'styled-components'
import { BlueRoundBtn, RadioBtn } from '../../../components/commons/Buttons'
import { ColContainer, RowContainer, InputContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import Flex from '../../../components/commons/Flex'
import { RoundInput } from '../../../components/commons/Inputs'
import { connect } from 'react-redux'
import { nextView, prevView } from '../../../redux'
import axios from 'axios'

const Subscription = ({view, nextView}) => {
    const ranks=["1순위","2순위"];
    const banks=["주택청약종합저축", "청약저축", "청약예금", "청약부금"];
    const winnings=["예", "아니오"];
    const radios=["예", "아니오"];
    const r='';

    const [specialRanking, setSpecialRanking]=useState("1순위");
    const [ranking, setRanking]=useState("1순위");
    const [rankHistory, setRankHistory]=useState("1순위");
    const [bank, setBank]=useState("주택청약종합저축");
    const [radio, setRadio]=useState("");
    const [winning, setWinning]=useState("");
    const [cnt, setCnt]=useState(0);
    const [teenPrice, setTeenPrice]=useState(0);
    const [teenSumPrice, setTeenSumPrice]=useState(0);

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
    const ClickRadio=(e)=>{
       setRadio(e.target.value);
       let r=''
       if (e.target.value==="예"){
            r="Y"
       }else{
        r="N"
       }
    }
    const ClickWinning=(e)=>{
        setWinning(e.target.value)
    }
    const ClickNext=()=>{
        axios.post('/api/v1/subscription', {
            
                bankBookList: [
                  {
                    bankBookDate: "string",
                    bankBookType: bank,
                    "teenCount": cnt,
                    "teenFlag": r,
                    "teenPrice": teenPrice,
                    "teenSumPrice": teenSumPrice,
                    "totalCount": 0,
                    "totalPrice": 0
                  }
                ],
                "generalRank": 0,
                "nowHouseStartDate": "string",
                "specialRank": 0,
                "winDate": "string",
                "winFlag": "Y"
              
        })
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
                            onChange={ClickRadio}
                        ></RadioBtn>
                        {rank}
                    </label>
                ))}        
        </RadioBtns>
       <Line/>
        <BlackText size="36px" weight="700">ㅣ 청약 당첨 이력</BlackText>
        <RadioBtns style={{marginBottom:"10px"}}>
        {winnings.map((r)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={r}
                            checked={winning===r}
                            onChange={ClickWinning}
                        ></RadioBtn>
                        {r}
                    </label>
                ))}        
        </RadioBtns>
        {
            winning==="예"
            ?
            <ColContainer style={{gap:"20px", margin:"30px 0"}}>
            <InputContainer>
                <BlackText>당첨 일자</BlackText>
                <RoundInput width={"80%"} height={"50px"} placeholder="YYYYMMDD"/>
            </InputContainer>
        </ColContainer>
            :
            <>
            </>
        }
       
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
        <ColContainer style={{marginBottom:"50px", gap: "30px"}}>
            <InputContainer>
                <BlackText>가입일자</BlackText>
                <RoundInput width={"80%"} height={"50px"}/> 
            </InputContainer>
            <InputContainer>
                <BlackText>만 19세 이전 가입했나요?</BlackText>
               
                    {radios.map((r)=>(
                        <label>
                        <RadioBtn
                            type="radio"
                            value={r}
                            checked={radio===r}
                            onChange={ClickRadio}
                        ></RadioBtn>
                        {r}
                        </label>
                ))}        
            </InputContainer>
            {
                radio==="예" ?
               <>
                <InputContainer>
                <BlackText>미성년 납입 횟수</BlackText>
                <RoundInput width={"70%"} height={"50px"} onChange={(e)=> setCnt(e.target.value)}/>
                </InputContainer>
                {
                    cnt>= 24
                    ?
                    <>
                    <InputContainer>
                        <BlackText onChange={(e)=>setTeenPrice(e.target.value)}>미성년 총 납입 금액</BlackText>
                        <RoundInput width={"65%"} height={"50px"} />
                        </InputContainer>
                        <InputContainer>
                        <BlackText>미성년일때의 납입 중 <br/>금액이 높은 순으로 24회의 합</BlackText>
                        <RoundInput width={"50%"} height={"50px"} onChange={(e)=>setTeenSumPrice(e.target.value)}/>
                    </InputContainer>
                    </>
                    :
                    <>
                    <InputContainer>
                        <BlackText onChange={(e)=>setTeenPrice(e.target.value)}>총 금액</BlackText>
                        <RoundInput width={"80%"} height={"50px"} />
                        </InputContainer>
                        <InputContainer>
                        <BlackText>납입 횟수</BlackText>
                        <RoundInput  width={"80%"} height={"50px"}/>
                    </InputContainer>
                    </>
                }
               </>
               
                :
                <>
                </>

            }
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
