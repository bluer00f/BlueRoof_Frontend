import React from 'react'
import styled from 'styled-components'
import { RowContainer,ColContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import SubScription from './Content/Subscription'
import SideMenu from './SideMenu'

const EditSubscription = () => {
  return (
    <EditSubscriptionContainer>
        <SideMenu/>
        <RightContainer>
            <ContentContainer>
               <Content>
                   <SubScription/> 
               </Content>
          </ContentContainer>
        </RightContainer>
        
    </EditSubscriptionContainer>
  )
}

export default EditSubscription
const EditSubscriptionContainer=styled(RowContainer)`
    height: auto;
`
const RightContainer=styled(ColContainer)`
 width: 80%;
`
const ContentContainer=styled(ColContainer)`
    width: 80%;
    height:80vh;
    border: 1px solid #D3D3D3;
    border-radius: 25px;
    padding: 50px 0;
    margin: 50px 0;
    overflow: auto;
`
const Content=styled.div`
width: 80%;
`


