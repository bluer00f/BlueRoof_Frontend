import React, {useState} from "react";
import styled from "styled-components";
import { BlackText } from "../../../components/commons/Font";
import { RadioBtn } from "../../../components/commons/Buttons";
import { RowContainer } from "../../../components/commons/Container";

const Check4 = () => {
    const types = ["아파트", "도시형생활주택", "오피스텔", "민간임대", "공고지원민간임대", "무순위/잔여세대", "계약취소주택"]
    const typeCdNm = ["01", "0201", "0202", "0203" ,"0303", "04", "06"]

    const [typeCd, SetTypeCd] = useState("");

    const ClickTypeCd = (e) => {
        SetTypeCd(e.target.value)
    }

    return (
        <CheckContainer>
            <BlackText weight={"500"} size={"30px"}>2. 주택 선택</BlackText>
            <BlackText weight={"600"} size={"22px"} marginTop={"20px"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주택구분</BlackText>
            <RadioBtns>
            {types.map((Cd)=>(
                        <label>
                            <RadioBtn
                                type="radio"
                                value={Cd}
                                checked={typeCd===Cd}
                                onChange={ClickTypeCd}
                                style={{margin:"20px 10px"}}
                            ></RadioBtn>
                            {Cd}
                        </label>
                    ))}        
            </RadioBtns> 
        </CheckContainer>
    )
}

export default Check4
const CheckContainer=styled.div`
    width: 90%;
    height: 100%;
`
const RadioBtns=styled(RowContainer)`
    margin: 50px 0 100px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    :checked{
        background-color: #000000;
    }
`
