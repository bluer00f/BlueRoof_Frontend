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
    const teen = ["예", "아니오"];
 

    const [specialRanking, setSpecialRanking]=useState("1순위");
    const [ranking, setRanking]=useState("1순위");
    
    const [winning, setWinning]=useState("");
    const [winningDate, setWinningDate] = useState('string');

    const [bank, setBank]=useState("주택청약종합저축");
    const [bankRegisterDate, setBankRegisterDate] = useState('string');
    const [isTeen, setIsTeen] = useState('');
    const [teenCnt, setTeenCnt]=useState(0);
    const [teenPrice, setTeenPrice]=useState(0);
    const [teenHighestSum, setTeenHighestSum]=useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCnt, setTotalCnt] = useState(0);
    const [nowHouseStartDate, setNowHouseStartDate] = useState('string');

    const ClickSpecialRank=(e)=>{
        setSpecialRanking(e.target.value);
    }
    const ClickRank=(e)=>{
        setRanking(e.target.value);
    }
     
    const ClickBank=(e)=>{
        setBank(e.target.value);
        
    }
    
    const clickIsTeen = (e)=>{
        setIsTeen(e.target.value)
    }
    const ClickWinning=(e)=>{
        setWinning(e.target.value)
    }
    const changeWinningDate=(e)=>{
        setWinningDate(e.target.value);
    }
    const changeBankRegisterDate=(e)=>{
        setBankRegisterDate(e.target.value);
    }
    
    const transferRadio =(r) =>{
        if (r ==='예'){
            return 'Y'
        }else{
            return 'N'
        }
    }
    const transferRank = (r) =>{
        if (r ==='1순위'){
            return 1
        }else{
            return 2
        }
    }
    const ClickNext=()=>{
        axios.post('http://52.78.189.54:8080/api/v1/subscription', {
                bankBookList: [
                  {
                    bankBookDate: bankRegisterDate,
                    bankBookType: bank,
                    teenCount: teenCnt,
                    teenFlag: transferRadio(isTeen),
                    teenPrice: teenPrice,
                    teenSumPrice: teenHighestSum,
                    totalCount: totalCnt,
                    totalPrice: totalPrice
                  }
                ],
                generalRank: transferRank(ranking),
                nowHouseStartDate: nowHouseStartDate,
                specialRank: transferRank(specialRanking),
                winDate: winningDate,
                winFlag: transferRadio(winning)
        })
        .then((res)=>console.log(res.data));
      
   
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
       <RowContainer style={{gap:"10px"}} >
            <BlackText size="36px" weight="700">ㅣ 현 주택 시작일</BlackText>
        </RowContainer>
        <ColContainer style={{gap:"20px", margin:"30px 0"}}>
            <InputContainer>
                <BlackText>현 주택 시작일</BlackText>
                <RoundInput width={"80%"} height={"50px"} placeholder="YYYYMMDD" onChange={(e)=>setNowHouseStartDate(e.target.value)}/>
            </InputContainer>
        </ColContainer>
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
                <RoundInput width={"80%"} height={"50px"} placeholder="YYYYMMDD" onChange={(e)=>changeWinningDate(e)}/>
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
                <RoundInput width={"80%"} height={"50px"} onChange={(e)=>changeBankRegisterDate(e)}/> 
            </InputContainer>
            <InputContainer>
                <BlackText>만 19세 이전 가입했나요?</BlackText>
               
                    {teen.map((r)=>(
                        <label>
                        <RadioBtn
                            type="radio"
                            value={r}
                            checked={isTeen===r}
                            onChange={clickIsTeen}
                        ></RadioBtn>
                        {r}
                        </label>
                ))}        
            </InputContainer>
            {
                isTeen==="예" ?
               <>
                <InputContainer>
                <BlackText>미성년 납입 횟수</BlackText>
                <RoundInput width={"70%"} height={"50px"} onChange={(e)=> setTeenCnt(e.target.value)}/>
                </InputContainer>
                {
                    teenCnt>= 24
                    ?
                    <>
                    <InputContainer>
                        <BlackText>미성년 총 납입 금액</BlackText>
                        <RoundInput width={"65%"} height={"50px"} onChange={(e)=>setTeenPrice(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                        <BlackText>미성년일때의 납입 중 <br/>금액이 높은 순으로 24회의 합</BlackText>
                        <RoundInput width={"50%"} height={"50px"} onChange={(e)=>setTeenHighestSum(e.target.value)}/>
                    </InputContainer>
                    </>
                    :
                    <>
                   
                    </>
                }
               </>
               
                :
                <>
                </>

            }
             <InputContainer>
                        <BlackText>총 금액</BlackText>
                        <RoundInput width={"80%"} height={"50px"} onChange={(e)=>setTotalPrice(e.target.value)}/>
                        </InputContainer>
                        <InputContainer>
                        <BlackText>납입 횟수</BlackText>
                        <RoundInput  width={"80%"} height={"50px"} onChange={(e)=>setTotalCnt(e.target.value)}/>
            </InputContainer>
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
