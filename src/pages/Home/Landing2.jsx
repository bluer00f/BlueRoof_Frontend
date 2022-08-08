import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import Flex from '../../components/commons/Flex'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText, GrayText } from '../../components/commons/Font'
const Landing2 = () => {

    const refs=useRef([]);// ref는 배열로 관리
    const textRef=useRef();
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

       refs.current.forEach(function(textanimation,index){
        gsap.to(textanimation,1,{
            //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
            scrollTrigger:refs.current[0],
          delay:(index + 1) * .6,
          opacity:1
        })
      });

      gsap.to(textRef.current,1,{
        scrollTrigger:refs.current[0],
      delay:1,
      opacity:1
    })

  },[])

    
  return (
    <Landing2Container>
      <Img src='../../imgs/landing2_sample.svg' ref={(el)=>refs.current[0]=el} ></Img>
      <RowContainer style={{width:"100%",height:"100%", gap: "30px", marginTop: "30px"}}>
        <Img src='../../imgs/landing2_sample.svg' ref={(el)=>refs.current[1]=el} ></Img>
        <Img src='../../imgs/landing2_sample.svg' ref={(el)=>refs.current[2]=el} style={{marginBottom:"70px"}}></Img>
      </RowContainer>
      <TextContainer ref={textRef}>
        <BlackText weight={"600"} size={"40px"} style={{textAlign:"center"}}>미리 개인정보를 입력해두고 편하게<br/>조건 검사 해보세요!</BlackText>
        <GrayText size={"14px"} marginTop={"10px"}>상세한 개인정보 문항을 통해 더욱 자세하고 정확한 조건 검사가 가능해요</GrayText>
      </TextContainer>
    </Landing2Container>
    

    

    
  )
}

export default Landing2

const Landing2Container=styled(ColContainer)`
    width: 100%;
    height: 100%;
    background-color: #F9FBFF;
    align-items: flex-start;
    padding:7%;
    padding-top: 10%;
`
const Img=styled.img`
  width: 35%;
  opacity:0;
`
const TextContainer=styled(ColContainer)`
  position: absolute;
  right: 10%;
  opacity:0;
`