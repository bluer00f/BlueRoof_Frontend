import React, {useState} from 'react'
import styled from 'styled-components'
import { BlackText } from '../../../components/commons/Font'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
const Check1 = () => {
    const checks=["특별공급","1순위/2순위","무순위","취소 후 재공급"]
    const [isCheck, setIsCheck]=useState([false, false, false, false]);
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
    <BlackText weight={"500"} size={"30px"}>1. 공급유형</BlackText>
        <RowContainer style={{justifyContent:"space-between", width: "100%", marginTop: "30px", height:"70%"}}>
            {checks.map((check, i)=>(
                <Box 
                onClick={()=>clickBox(i)}
                value={i}
                className={isCheck[i] ? "checked" : ""}
                >   
                
                APT<br/>
                {check}
                
                  
                </Box>
            ))}
        </RowContainer>
    </CheckContainer>
   
  )
}

export default Check1
const CheckContainer=styled.div`
    width: 90%;
    height: 100%;
`
const Box=styled.button`
    width: 23%;
    height: 90%;
    background-color: #D2D2D2;
    color: white;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    border:none;
    text-align: start;
    &.checked{
        background-color: #0028FF;
    }
`