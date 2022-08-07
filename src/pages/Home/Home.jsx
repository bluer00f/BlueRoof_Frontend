import React from 'react'
import FullPage, { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import styled from 'styled-components'
import { RowContainer, ColContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import Landing1 from './Landing1'
import Landing2 from './Landing2'

const Home = () => {
  const SectionStyle={
    height: '100vh',
    width: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center'
  }
  
  return (
    <FullPage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <Landing1/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Landing2/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <h1>hi 3</h1>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  )
}

export default Home
