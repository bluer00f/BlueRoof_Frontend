import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'


const Car = () => {
    const buildingDropDown=["", ""];
  return (
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
  )
}

export default Car