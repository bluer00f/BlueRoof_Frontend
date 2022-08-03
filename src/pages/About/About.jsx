import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'

const About = () => {
    const [tab, setTab]=useState(1);
    
  return (
    <ColContainer>
        <AboutContainer>
            <TopSection>
                <BlackText weight={"500"} size={"36px"}>About BlueRoof</BlackText>
            </TopSection>
           <ContentContainer>
            <RowContainer>
                <Tab onClick={()=>setTab(1)} className={tab===1 ? "focused": ""}>BlueRoof 소개</Tab>
                <Tab onClick={()=>setTab(2)} className={tab===2 ? "focused": ""}>팀 소개</Tab>
            </RowContainer>
                <Content>
                    {
                        tab===1
                        ?
                        <div>
                            <Title>BlueRoof란?</Title>
                            <ContentText>청약에 대한 관심도가 높아지는 요즘, 사용자들이 쉽게 청약을 이용하고 자신의 조건을 판단할 수 있도록 하기 위해 만든 서비스입니다. 챗봇과 미니게임을 통해 청약을 쉽게 이해할 수 있도록 하였으며 상세한 조건 검사를 통해 편리하고 정확한 가점 및 적격 여부 계산이 가능합니다. 또한, 청약 관련 서류들을 따로 저장해두어 개인 서류 관리가 편리하도록 하였으며 커뮤니티를 통해 사람들과 청약 정보 소통이 가능합니다.</ContentText>
                        </div>
                        :
                        <div>팀 소개 내용</div>
                    }
                </Content>
           </ContentContainer>
        </AboutContainer>
    </ColContainer>
    
  )
}

export default About
const AboutContainer=styled.div`
    width: 80%;
`
const TopSection=styled.div`
    margin: 70px 0 100px 0;
`
const ContentContainer=styled.div`
    width: 100%;
    height: 600px;
`
const Tab=styled.button`
    width:20%;
    height: 55px;
    background: #FFFFFF;
    border: 1px solid #D3D3D3;
    border-width: 1px 1px 0px 1px;
    &.focused{
        border: 1px solid #0028FF;
        border-width: 1px 1px 0px 1px;
        color: #0028FF;
        height: 65px;
        width: 22%;
    }
    font-size:20px;
`
const Content=styled.div`
    width: 100%;
    height: 400px;
    border: 1px solid #0028FF;
    border-radius: 0px 0px 20px 20px;
    padding: 40px 60px;
`
const Title=styled(BlackText)`
    font-weight: 500;
    font-size: 24px;
    margin: 10px 0;
`
const ContentText=styled.div`
font-size: 20px;
line-height: 24px;
color: #616771;

`