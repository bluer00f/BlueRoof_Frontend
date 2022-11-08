import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { RoundInput } from '../../../components/commons/Inputs'
import { Dropdown } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { LandArrState } from '../../../atoms/state'

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
      setLandObj({
        landAddr: landAddr,
        landArea: landArea,
        landDate: landArea,
        landPrice: landPrice,
        landZipcode: landZipcode
      })
      setLandArr([...landArr, landObj]);
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
                  <button onClick={clickSave}>저장</button>
        </LandContainer>
   
  )
}

export default Land
const LandContainer=styled(ColContainer)`
    margin-bottom: 30px;
    width: 100%;
    gap: 10px;
`