import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { CarArrState } from '../../../atoms/state'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { BlueRoundBtn, BorderWhiteBtn } from '../../../components/commons/Buttons'


const Car = () => {
    const buildingDropDown=["자가용승용차", "영업용승용차", "자가용버스", "영업용버스", "자가용화물차", "영업용화물차", "특수차"];

    const [carType, setCarType] = useState('');
    const [carPrice, setCarPrice] = useState(0);
    const [carYear, setCarYear] = useState(0);

    const [carObj, setCarObj] = useState({});
    const [carArr, setCarArr] = useRecoilState(CarArrState)
    const clickSave = (e)=>{
      
      setCarArr([...carArr,{
        carPrice: carPrice,
        carType: carType,
        carYear: carYear
      }]);
    }
  return (
    <ColContainer>
    <RowContainer style={{gap:"10px", width: "90%"}}>
    
    <select style={{width:"20%"}}  onChange={(e)=>setCarType(e.target.value)}>
      {
      buildingDropDown.map((option)=>(
        <option>
            {option}
        </option>
      ))
     }
     
    </select>
 

  <RoundInput width={"40%"} height={"50px"} placeholder="가격" onChange={(e)=>setCarPrice(e.target.value)}/>
  <RoundInput width={"40%"} height={"50px"} placeholder="제조 년도" onChange={(e)=>setCarYear(e.target.value)} />
  </RowContainer>
          <BorderWhiteBtn
                   style={{border:"solid black 1px", borderRadius:"20px", padding:"5px 10px", marginTop:"10px"}}
                   onClick={clickSave}>저장</BorderWhiteBtn>
          </ColContainer>
    
  )
}

export default Car