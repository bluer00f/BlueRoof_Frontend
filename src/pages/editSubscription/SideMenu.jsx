import React from 'react'
import styled from 'styled-components'
import { ColContainer } from '../../components/commons/Container'
import { BlackText, WhiteText } from '../../components/commons/Font'

const SideMenu = () => {
  return (
    <SideMenuContainer>
        <Content>
        <WhiteText size="24px" style={{marginTop:'20px'}}>나의 청약 정보 </WhiteText>
        <BlackText size="20px">순위</BlackText>
        <BlackText size="20px">2년 재 당첨 이력</BlackText>
        <BlackText size="20px">청약 통장</BlackText>
        <WhiteText size="24px" style={{marginTop:'20px'}}>나의 자산 정보 </WhiteText>
        <BlackText size="20px">소득</BlackText>
        <BlackText size="20px">건물</BlackText>
        <BlackText size="20px">토지</BlackText>
        <BlackText size="20px">자동차</BlackText>
        <WhiteText size="24px" style={{marginTop:'20px'}}>세대구성원 정보 </WhiteText>`
        </Content>
    </SideMenuContainer>
  )
}

export default SideMenu

const SideMenuContainer=styled(ColContainer)`
    width: 20%;
    height: 90vh;
    background: rgba(0, 40, 255, 0.8);
    border-radius: 0px 20px 20px 0px;
    padding-top: 100px;
`
const Content=styled(ColContainer)`
    align-items: flex-start;
    gap: 10px;
`