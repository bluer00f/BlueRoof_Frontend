//테스트 파일 - 삭제 예정

import React from "react";
import { useState } from "react";
import styled from "styled-components"
import { ColContainer } from "../../../components/commons/Container";
import { RoundInput } from "../../../components/commons/Inputs";
import { DropDownBtn } from "../../../components/commons/Dropdown";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


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
            <DropdownButton width={"100px"} heigth={"50px"}>
                <select onChange={handleSelect} value={Selected}>
                    {SexOptions.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </DropdownButton>
            <Dropdown title="성별" width={"100px"} heigth={"50px"}>
                <Dropdown.Item onChange={handleSelect}>남</Dropdown.Item>
                <Dropdown.Item onChange={handleSelect}>여</Dropdown.Item>
            </Dropdown>
        </ColContainer>
    )
}

export default DropdownEX


