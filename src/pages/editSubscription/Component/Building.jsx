import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  AddBuilding} from '../../../redux'
import { useRecoilState } from 'recoil'
import { buildingArrState } from '../../../atoms/state'

const Building = ({building, AddBuilding}) => {
    const buildingDropDown=["단독주택", "공동주택","오피스텔","공장","상가","부속토지"];

   const [buildingType, setBuildingType]=useState('');
   const [addr, setAddr]=useState('');
   const [addrNum, setAddrNum] = useState('');
   const [buildingSize, setBuildingSize] = useState('');
  const [buildingPrice, setBuildingPrice] = useState(0);
  const [buildingStartDay, setBuildingStartDay] = useState('');
   //state값을 addr[cnt]에 넣기 
  
   const changeAddr = (e) =>{
    setAddr(e.target.value)
  }
  
  const changeBuildingType = (e) =>{
    setBuildingType(e.target.value);
  }
  const changeAddrNum = (e) =>{
    setAddrNum(e.target.value)
  }
  
  const changeBuildingSize = (e) =>{
    setBuildingSize(e.target.value)
  }
  const changeBuildingPrice = (e) =>{
    setBuildingPrice(e.target.value)
  }
  const changeBuildingStartDay = (e) =>{
    setBuildingStartDay(e.target.value)
  }
  const [buildingArr, setBuildingArr]= useRecoilState(buildingArrState);

  const [buildingObj, setBuildingObj] = useState({});
  console.log(buildingArr)
  const clickSave= ()=>{
    setBuildingObj({
      buildingAddress: addr,
      buildingArea: buildingSize,
      buildingDate: buildingStartDay,
      buildingPrice: buildingPrice,
      buildingType: buildingType,
      buildingZipcode: addrNum
    })
    setBuildingArr([...buildingArr, buildingObj]);
    console.log(buildingArr);
  }
  
  return (
    <BuildingContainer>
        <RowContainer style={{gap:"10px", width: "90%", }}>
                      <select style={{width:"20%"}}  onChange={(e)=>changeBuildingType(e)}>
                      {
                      buildingDropDown.map((option)=>(
                        <option>
                            {option}
                        </option>
                      ))
                    }
                    </select>
                    
                    <RoundInput height={"50px"} placeholder="우편번호" onChange={(e)=>{changeAddrNum(e)}} />
                    <RoundInput   height={"50px"} placeholder="주소" onChange={(e)=>{changeAddr(e)}} ></RoundInput>
                  </RowContainer>
                  <RowContainer style={{ width: "90%",gap:"10px",}}>
                    <RoundInput  height={"50px"} placeholder="건물면적" onChange={(e)=>{changeBuildingSize(e)}} />
                    <RoundInput  height={"50px"} placeholder="가격" onChange={(e)=>{changeBuildingPrice(e)}} />
                    <RoundInput  height={"50px"} placeholder="건물 취득일" onChange={(e)=>{changeBuildingStartDay(e)}} />
                  </RowContainer>
                  <button onClick={clickSave}>저장</button>
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