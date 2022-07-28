import React from "react";
import { useState } from "react";
import styled from "styled-components"
import { ColContainer } from "../../../components/commons/Container";
import { RoundInput } from "../../../components/commons/Inputs";
import { DropDownBtn } from "../../../components/commons/Dropdown";

const DropdownEX = () => {
    const SexOptions = ["성별", "남", "여"];
    const [Selected, setSelected] = useState("성별");
    
    const handleSelect = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };
    
    return (
        <ColContainer style={{marginTop:"50px"}}>
            <DropDownBtn width={"100px"} heigth={"50px"}>
                <select onChange={handleSelect} value={Selected}>
                    {SexOptions.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </DropDownBtn>
        </ColContainer>
    )
}

export default DropdownEX


