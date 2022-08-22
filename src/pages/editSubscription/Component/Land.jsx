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