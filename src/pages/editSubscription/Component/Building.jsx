import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  AddBuilding} from '../../../redux'

const Building = ({building, AddBuilding}) => {
    const buildingDropDown=["단독주택", "공동주택","오피스텔","공장","상가","부속토지"];
   const [state, setState]=useState("");
   const [addr, setAddr]=useState([]);
   //state값을 addr[cnt]에 넣기

   const changeInput=(e)=>{
    setState(e.target.value)   
  }
  const onBlurInput=()=>{
    //인풋에서 포커스 빠져나가면
    AddBuilding("hi");
  }
  return (
    <BuildingContainer>
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
                    <RoundInput  height={"50px"} placeholder="주소" onChange={(e)=>{changeInput(e)}} onClick={onBlurInput}></RoundInput>
                    <RoundInput  height={"50px"} placeholder="가격"/>
                    <RoundInput  height={"50px"} placeholder="건물 취득일"/>
                  </RowContainer>
        </BuildingContainer>
  )
}
const mapStateToProps=({building})=>{
  return{
    building: building.buildings
    
  }
}
const mapDispatchToProps={
  AddBuilding,
}

export default connect(mapStateToProps, mapDispatchToProps )(Building)


const BuildingContainer=styled(ColContainer)`
    margin-bottom: 30px;
    width: 100%;
    gap: 10px;
`