import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Landing2 = () => {

    const refs=useRef([]);// ref는 배열로 관리

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

       refs.current.forEach(function(textanimation,index){
        gsap.to(textanimation,1,{
            //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
            scrollTrigger:refs.current[0],
          delay:(index + 1) * .6,
          opacity:1
        })
      })

    },[])

    
  return (
    <Landing2Container>
        <div ref={(el)=>refs.current[0]=el} style={{opacity:'0'}} >hi</div>
        <div ref={(el)=>refs.current[1]=el} style={{opacity:'0'}} >hi2</div>
        <div ref={(el)=>refs.current[2]=el} style={{opacity:'0'}} >hi3</div>
 
    </Landing2Container>
    

    

    
  )
}

export default Landing2

const Landing2Container=styled(Flex)`
    background-color: #F9FBFF;
`