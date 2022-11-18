import React, { useState } from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer, InputContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { RoundInput,DateInput } from '../../../components/commons/Inputs'
import { RadioBtn } from '../../../components/commons/Buttons'
import { Dropdown } from 'react-bootstrap'
import { nextView, prevView, AddBuilding} from '../../../redux'
import { BlueRoundBtn } from '../../../components/commons/Buttons'
import Flex from '../../../components/commons/Flex'
import { connect } from 'react-redux'
import Building from '../Component/Building'
import Land from '../Component/Land'
import Car from '../Component/Car'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { buildingArrState, CarArrState, LandArrState } from '../../../atoms/state'

const Asset = ({view, nextView, AddBuilding, building}) => {
  const options=["예", "아니오"];
  const buildingDropDown=["단독주택", "공동주택","오피스텔","공장","상가","부속토지"];
  const [Isbuilding, setIsBuilding]=useState("예");
  const [land,setLand]=useState("예");
  const [car, setCar]=useState("예");
  const [month, setMonth]=useState(0);
  const [houseEndDate, setHouseEndDate] = useState('')

  const [buildingComponent, setBuildingComponent]=useState([<Building/>])
  const [landComponent, setLandComponent]=useState([<Land/>])
  const [carComponent, setCarComponent]=useState([<Car/>])
  const addBuildingComponent=()=>{
    buildingComponent.push(<Building/>);
    setBuildingComponent([...buildingComponent]);
  }
  const addLandComponent=()=>{
    landComponent.push(<Land/>);
    setLandComponent([...landComponent]);
  }
  const addCarComponent=()=>{
    carComponent.push(<Car/>);
    setCarComponent([...carComponent]);
  }
  

  const landArr= useRecoilState(LandArrState);
  const buildingArr = useRecoilState(buildingArrState);
  const carArr= useRecoilState(CarArrState);

  const transferRadio =(r) =>{
    if (r ==='예'){
        return 'Y'
    }else{
        return 'N'
    }
}

  const ClickBuilding = (e) =>{
    setIsBuilding(e.target.value)
  }
  const ClickLand = (e) =>{
    setLand(e.target.value)
  } 
  const ClickCar = (e) =>{
    setCar(e.target.value)
  }

  const renderBuilding=()=>{
    return buildingComponent
  }
  const renderLand=()=>{
    return landComponent
  }
  const renderCar=()=>{
    return carComponent
  }

  const token=localStorage.getItem("accessToken");
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;

  const onClickNext=()=>{
    console.log(landArr);
 
    axios.post('/api/v1/asset',{
      building: buildingArr[0],
      buildingFlag: transferRadio(Isbuilding),
      car: carArr[0],
      carFlag: transferRadio(car),
      houseEndDate: houseEndDate,
      incomeMonthPrice: parseInt(month),
      land: landArr[0],
      landFlag: transferRadio(land)
    }).then((res)=>console.log(res.data))
  }
  
  return (
    <AssetContainer>
      <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 나의 소득</BlackText>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>소득 확인 바로가기</a>
      </RowContainer>
      <ColContainer>
      <InputContainer>
        <BlackText>월 평균 소득 (원)</BlackText>
        <RoundInput width={"80%"} height={"50px"} onChange={(e)=>setMonth(e.target.value)}/>
      </InputContainer>
       
      </ColContainer>
      <Line/>
      <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 건물 소유 여부</BlackText>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>공시지가 확인 바로가기</a>
          <a href="https://www.naver.com" style={{fontSize:"14px"}}>소유 건물 기준 확인 바로가기</a>
      </RowContainer>
      <RadioBtns style={{marginBottom:"10px"}}>
        {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={Isbuilding===option}
                            onChange={ClickBuilding}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
        </RadioBtns>
        {
          Isbuilding==="예"
          ?
          <ColContainer style={{gap:"20px", margin:"50px 0"}}>
          {renderBuilding()}
          <img src='../../imgs/add.svg' onClick={()=>{addBuildingComponent();}}></img>
              
              <RowContainer style={{width:"80%", marginTop:"50px"}}>
                <BlackText style={{width:"20%"}}>무주택 시작일</BlackText>
                <DateInput 
                onChange={(e)=>setHouseEndDate(e.target.value)}
                width={"80%"} height={"50px"}  placeholder="무주택 시작일"  />
            </RowContainer>
          </ColContainer>
  
          :<>
          </>
        }
       
        <Line/>

        <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
          <BlackText size="36px" weight="700">ㅣ 토지 소유 여부</BlackText>
          <a href="https://www.realtyprice.kr/notice/gsindividual/siteLink.htm" style={{fontSize:"14px"}}>공시지가 확인 바로가기</a>
        </RowContainer>
        <RadioBtns style={{marginBottom:"10px"}}>
                      {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={land===option}
                            onChange={ClickLand}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
        </RadioBtns>
        {
          land==="예"
          ?
          <ColContainer style={{margin: "50px 0", gap: "20px"}}>
          {renderLand()}
          <img src='../../imgs/add.svg' onClick={()=>{addLandComponent();}}></img> 
          </ColContainer>
         
          :
          <>
          </>
          }
       
        <Line/>
          <RowContainer style={{gap:"10px", marginBottom:"50px"}}>
            <BlackText size="36px" weight="700">ㅣ 자동차 소유 여부</BlackText>
            <a href="https://tewf.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/wf/c/a/a/UTEWFCAA02.xml" style={{fontSize:"14px"}}>차량 가액 확인 바로가기</a>
          </RowContainer>
          <RadioBtns style={{marginBottom:"10px"}}>
            {options.map((option)=>(
                    <label>
                        <RadioBtn
                            type="radio"
                            value={option}
                            checked={car===option}
                            onChange={ClickCar}
                        ></RadioBtn>
                        {option}
                    </label>
                ))}        
            </RadioBtns>
            {
              car==="예"
              ?
              <ColContainer style={{gap:"20px", margin:"50px 0"}}>
              {renderCar()}
              <img src='../../imgs/add.svg' onClick={()=>{addCarComponent();}}></img> 
             </ColContainer>
              
              :
              <>
              </>
            }
           
            <BtnContainer>
              <BlueRoundBtn onClick={onClickNext}>다음 &gt;</BlueRoundBtn>
            </BtnContainer>
           
      
    </AssetContainer>
  )
}

const mapStateToProps=({view})=>{
  return{
    view: view.view,
    
  }
}
const mapDispatchToProps={
  nextView,
}

export default connect(mapStateToProps, mapDispatchToProps)(Asset)
const AssetContainer=styled.div`
  padding-top: 50px;
`
const Line=styled.div`
    width: 100%;
    height:1px;
    background-color: #B3B3B3;
   margin: 100px 0;
`
const RadioBtns=styled(RowContainer)`
    margin: 50px 0 100px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const BtnContainer=styled(Flex)`
    justify-content: flex-end;
    padding-bottom: 30px;
`