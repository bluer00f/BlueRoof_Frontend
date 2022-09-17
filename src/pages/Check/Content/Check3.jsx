import React, {useState} from "react";
import styled from "styled-components";
import { BlackText } from "../../../components/commons/Font";
import { RadioBtn } from "../../Signup";
import { RowContainer } from "../../../components/commons/Container";

const Check3 = () => {
    const AreaCodeNms = ["서울특별시", "강원도", "대전광역시", "충청남도", "세종자치시", "충청북도", "인천광역시",
    "경기도", "광주광역시", "전라남도", "전라북도", "부산광역시", "경상남도", "울산광역시", "제주특별자치도", "대구광역시", "경상북도"]

    const [AreaCodeNm, SetAreaCodeNm] = useState("");

    const ClickAreaCodeNm = (e) => {
        SetAreaCodeNm(e.target.value)
    }
    return (
        <CheckContainer>
            <BlackText weight={"500"} size={"30px"}>2. 주택 선택</BlackText>
            <BlackText weight={"600"} size={"22px"} marginTop={"20px"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공급지역</BlackText>
            <RadioBtns>
            {AreaCodeNms.map((Nm)=>(
                        <label>
                            <RadioBtn
                                type="radio"
                                value={Nm}
                                checked={AreaCodeNm===Nm}
                                onChange={ClickAreaCodeNm}
                                style={{margin:"10px"}}
                            ></RadioBtn>
                            {Nm}
                        </label>
                    ))}        
            </RadioBtns> 
        </CheckContainer>
        
    )
    }

export default Check3
const CheckContainer=styled.div`
    width: 90%;
    height: 100%;
`
const RadioBtns=styled(RowContainer)`
    margin: 40px 0 100px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    :checked{
        background-color: #000000;
    }
`