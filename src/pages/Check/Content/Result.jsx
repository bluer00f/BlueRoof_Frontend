import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { BlueRoundBtn } from "../../../components/commons/Buttons";
import { RowContainer, ColContainer } from "../../../components/commons/Container";
import { BlackText } from "../../../components/commons/Font";
import { RoundBox } from "../../Signup";
import PopupResult from "./PopupResult";
import axios from "axios";

const Result =() => {
    const [popupResult, setPopupResult] = useState(false)

    const onClickPopupOpen = () => {
        setPopupResult(true);
    }
    const onClickPopupClose = () => {
        setPopupResult(false);
    }

    const [aptNm, setAptNm] = useState();
    const [type, setType] = useState();


    //임시 데이터 -> 나중에 api로 받아와야함
      const checks=["서울은평뉴타운 디에트르더퍼스트", "힐스테이트 관악뉴포레", "보라매한국 아델리움앤클래스", "용인흥덕2", "서광교파크뷰", "의왕고천A-2블록 행복주택", "abcedf"]
      const citys=["서울", "서울", "서울", "용인", "수원", "의왕", "서울"]
      const types=["APT", "APT", "APT", "APT", "APT", "APT", "APT"]
      const alert1=["• 투기 과열 지구","• 투기 과열 지구","","","• 투기 과열 지구","• 투기 과열 지구"]
      const alert2=["• 청약 과열 지구","", "", "• 청약 과열 지구", "• 청약 과열 지구", "", "• 청약 과열 지구"]
      const areas=["069.9932", "084.9692A", "084.9692B", "084.9513C", "084.9443D"]
      const qualifys=["적격", "부적격"]
      const score="11"

      const onClickHistory = () => {
        window.location.href="/"
      }

      const onClickOk = () => {
        window.location.href="/"
      }

    return (
        <ResultContainer>
            <BlackText weight={"500"} size={"30px"}>4. 진단 결과</BlackText>
            <RowContainer width={"100%"} height={"90%"} style={{marginTop:"20px"}}>
                <ImgBox>
                  <AlertBox>
                    {alert1[0] !== "" ? alert1[0] : ""}
                    {alert1[0] !== "" ? <br/> : ""}
                    {alert2[0] !== "" ? alert2[0] : ""}
                  </AlertBox>
                  <CityBox>
                    {citys[0]}
                  </CityBox>
                  <InfoBox>
                    {checks[0]}
                  </InfoBox>
                  <TypeBox>
                    {"|"+types[0]}
                  </TypeBox>
                  <AreaBox>
                    {areas[3]} 형
                  </AreaBox>
                </ImgBox>
                <ColContainer width={"55%"} height={"100%"} style={{marginLeft: "30px"}}>
                    <BlackText size={"20px"} style={{fontWeight: "bold", width: "100%", marginTop: "10px"}}>
                        | 청약 자격 진단 결과
                    </BlackText>
                    <RoundBox width="100%" height="45px" style={{marginTop: "20px", paddingLeft: "30px"}}>
                        {qualifys[0]}
                    </RoundBox>
                    <React.Fragment>
                        <p onClick={onClickPopupOpen} style={{textDecorationLine:"underline", width: "100%", textAlign: "right", fontSize:"15px", fontWeight:"bold", color:"#0028FF", margin:" 10px 20px 0 0"}}>
                        부적격 사유 확인</p>
                        <PopupResult open={popupResult} close={onClickPopupClose} header="부적격 사유 확인">
                            배우자의 5년 내 청약 당첨 이력 존재
                        </PopupResult>
                    </React.Fragment>
                    <BlackText size={"20px"} style={{fontWeight: "bold", width: "100%", marginTop: "40px"}}>
                        | 청약 가점
                    </BlackText>
                    <RoundBox width="100%" height="45px" style={{marginTop: "20px", paddingLeft: "30px"}}>
                        {score} 점
                    </RoundBox>
                    <a href="/signup" style={{width: "100%", textAlign: "right", fontSize:"15px", fontWeight:"bold", color:"#0028FF", margin:" 10px 20px 0 0"}}>
                        가점 내역 확인
                    </a>  
                    
                   
               
                    <RowContainer style={{justifyContent: "right", width: "100%", height: "30%", marginTop: "20px"}}>
                        <BlueRoundBtn onClick={onClickHistory} style={{width: "60px", height: "15px", border: "2px solid #0028FF", color: "#0028FF", backgroundColor: "white", margin: "5px", lineHeight: "15px", textAlign: "center"}}>
                            이전내역
                        </BlueRoundBtn>
                        <BlueRoundBtn onClick={onClickOk} style={{width: "60px", height: "15px", border: "2px solid #0028FF", margin: "5px", lineHeight: "15px", textAlign: "center"}}>
                            완료
                        </BlueRoundBtn>
                    </RowContainer>
                </ColContainer>
            </RowContainer>
        </ResultContainer>
    )

}

export default Result

const ResultContainer=styled.div`
    width: 90%;
    height: 100%;
`
const ImgBox=styled.div`
    width: 45%;
    height: 350px;
    border-radius: 10px;
    background-image: url("https://cdn.pixabay.com/photo/2022/07/29/18/11/city-7352352_1280.jpg");
    background-size: cover;
    display: flex;
    position: relative;
    align-items: end;
    box-shadow: 3px 3px #D8D8D890;
    margin-top: 10px;
`
const CityBox=styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: white;
    color: gray;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    position: absolute;
    z-index: 2;
    margin: 0 0 110px 20px;
    box-shadow: 1px 1px #D8D8D890;
`
const AlertBox=styled.div`
    width: 100%;
    height: 100%;
    font-size: 13px;
    text-align: right;
    color: red;
    padding: 10px;
    position: absolute;
    z-index: 2;
`
const InfoBox=styled.div`
    width: 100%;
    height: 40%;
    border-radius: 0 0 10px 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    overflow-y: scroll;
    padding: 30px 30% 0 20px;
    position: absolute;
    z-index: 1;
    background-color: white;
`
const AreaBox=styled.div`
    width: 100%;
    height: 40%;
    color: #0028FF;
    font-size: 16px;
    text-align: left;
    position: absolute;
    z-index: 2;
    padding: 90px 30% 0 20px;
`
const TypeBox=styled.div`
    width: 100%;
    height: 40%;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
    padding: 30px 20px 0 0;
    position: absolute;
    z-index: 2;
    color: black;
`
