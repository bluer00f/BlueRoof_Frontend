import React from "react";
import styled from "styled-components";
import { BlackText, BlueText } from "../../components/commons/Font";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import Flex from "../../components/commons/Flex";

const History = () => {
    const dates=["2022.07.18", "2022.04.27", "2021.10.11"];
    const checks=["서울은평뉴타운 디에트르더퍼스트", "힐스테이트 관악뉴포레", "보라매한국 아델리움앤클래스", "용인흥덕2", "서광교파크뷰", "의왕고천A-2블록 행복주택", "abcedf"]
    const types=["APT", "APT", "APT", "APT", "APT", "APT", "APT"]
    const areas=["069.9932", "084.9692A", "084.9692B", "084.9513C", "084.9443D"]
    const qualifys=["적격", "부적격", "부적격"]
    const scores=["3", "15", "8"]

    return (
        <HistoryContainer style={{textAlign:"left"}}>
                <BlackText style={{width:"75%", marginTop:"15px"}} weight={"500"} size={"30px"}>자격진단 내역</BlackText>
                <ColContainer style={{justifyContent:"space-between", width: "100%", marginTop: "20px", height:"70%"}}>
                    {dates.map((date, i)=>(
                        <ColContainer width={"100%"}>
                            <BlueText style={{width:"75%", marginTop:"15px"}} size="20px">{date}</BlueText>
                            <ContentContainer height={"100%"}>
                                <ColContainer style={{width:"43%", justifyContent:"space-between", height:"100%"}}>
                                    <BlackText style={{width:"100%", fontSize:"18px", fontWeight:"bold"}}>{checks[i]}</BlackText>
                                    <BlackText style={{width:"100%"}}>{areas[i] + "형"}</BlackText>
                                </ColContainer>
                                <BlackText style={{width:"17%", height:"100%", display:"flex", alignItems:"center"}}>{"|" + types[i]}</BlackText>
                                <BlackText style={{width:"17%", height:"100%", display:"flex", alignItems:"center"}}>{qualifys[i]}</BlackText>
                                <BlackText style={{width:"17%", height:"100%", display:"flex", alignItems:"center"}}>{scores[i] + "점"}</BlackText>
                                <Box style={{width:"6%", height:"100%", display:"flex", alignItems:"center"}}>
                                    <img src='../../imgs/rightArrow.svg'
                                        onClick={window.location.href="#"}
                                        style={{marginLeft:"auto"}}
                                    ></img>
                                </Box>
                                
                            </ContentContainer>
                        </ColContainer>
                    ))}
                </ColContainer>
        </HistoryContainer>
        
    )
}

export default History

const HistoryContainer=styled(Flex)`
    align-items: center;
	flex-direction: column;
    padding: 50px;
`
const ContentContainer=styled(RowContainer)`
    border: 1px solid #D3D3D3;
    border-radius: 20px;
    width: 80%;
    height: 110px;
    margin: 1% 0;
    padding: 1.5% 5%;
`
const Box=styled.div`
`