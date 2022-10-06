import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'



const Car = () => {
    const buildingDropDown=["자가용승용차", "영업용승용차", "자가용버스", "영업용버스", "자가용화물차", "영업용화물차", "특수차"];
  return (
    <RowContainer style={{gap:"10px", width: "90%"}}>
    
        <select style={{width:"20%"}}  onChange={(e)=>console.log(e.target.value)}>
          {
          buildingDropDown.map((option)=>(
            <option>
                {option}
            </option>
          ))
         }
         
        </select>
     

    <RoundInput width={"40%"} height={"50px"} placeholder="가격"/>
    <RoundInput width={"40%"} height={"50px"} placeholder="제조 년도"/>
  </RowContainer>
  )
}

export default Car