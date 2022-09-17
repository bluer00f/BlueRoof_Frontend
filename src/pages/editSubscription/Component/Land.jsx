import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'

const Land = () => {
    const buildingDropDown=["", ""];
  return (
    <LandContainer>
        <RowContainer style={{gap:"10px", width: "90%", whiteSpace:"nowrap", overflowX:"auto"}}>
                    
                    <RoundInput width={"30%"} height={"50px"} placeholder="우편번호"/>
                    <RoundInput width={"70%"} height={"50px"} placeholder="토지 면적"/>
                  </RowContainer>
                  <RowContainer style={{ width: "90%",gap:"10px",}}>
                    <RoundInput  height={"50px"} placeholder="주소" ></RoundInput>
                    <RoundInput  height={"50px"} placeholder="가격"/>
                    <RoundInput  height={"50px"} placeholder="건물 취득일"/>
                  </RowContainer>
        </LandContainer>
   
  )
}

export default Land
const LandContainer=styled(ColContainer)`
    margin-bottom: 30px;
    width: 100%;
    gap: 10px;
`