import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { LandArrState } from '../../../atoms/state'
import { BlueRoundBtn, BorderWhiteBtn } from '../../../components/commons/Buttons'

const Land = () => {
    const buildingDropDown=["", ""];

    const [landAddr, setLandAddr] = useState('');
    const [landArea, setLandArea] = useState(0);
    const [landDate, setLandDate] = useState('');
    const [landPrice, setLandPrice] = useState(0);
    const [landZipcode, setLandZipcode] = useState('');

    const [landObj, setLandObj] = useState({});
    const [landArr, setLandArr] = useRecoilState(LandArrState);
    const clickSave = (e)=>{

      setLandArr([...landArr,{
        landAddress: landAddr,
        landArea: parseInt(landArea),
        landDate: landDate,
        landPrice: parseInt(landPrice),
        landZipcode: landZipcode
      }]);
     
    }
    
  return (
    <LandContainer>
        <RowContainer style={{gap:"10px", width: "90%", whiteSpace:"nowrap", overflowX:"auto"}}>
                    
                    <RoundInput width={"30%"} height={"50px"} placeholder="우편번호" onChange={(e)=> setLandZipcode(e.target.value)}/>
                    <RoundInput width={"70%"} height={"50px"} placeholder="토지 면적" onChange={(e)=> setLandArea(e.target.value)}/>
                  </RowContainer>
                  <RowContainer style={{ width: "90%",gap:"10px",}}>
                    <RoundInput  height={"50px"} placeholder="주소" onChange={(e)=>setLandAddr(e.target.value)}/>
                    <RoundInput  height={"50px"} placeholder="가격" onChange={(e)=>setLandPrice(e.target.value)}/>
                    <RoundInput  height={"50px"} placeholder="건물 취득일" onChange={(e)=>setLandDate(e.target.value)}/>
                  </RowContainer>
                  <BorderWhiteBtn
                   style={{border:"solid black 1px", borderRadius:"20px", padding:"5px 10px"}}
                   onClick={clickSave}>저장</BorderWhiteBtn>
        </LandContainer>
   
  )
}

export default Land
const LandContainer=styled(ColContainer)`
    margin-bottom: 30px;
    width: 100%;
    gap: 10px;
`