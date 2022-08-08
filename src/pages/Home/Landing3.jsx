import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import { ColContainer } from '../../components/commons/Container';
import { BlackText, GrayText } from '../../components/commons/Font';
const Landing3 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        //slidesToShow: 3, //3장씩 보이게
        slidesToScroll: 1, //1장씩 넘어가게
        //centerMode: true,
        //centerPadding: '0px' //슬라이드 끝 이미자가 안잘리도록
        nextArrow:(
            <img src='../../imgs/rightArrow.svg'></img>
        ),
        prevArrow:(
            <img src='../../imgs/leftArrow.svg'></img>
        )
      };
  return (
    <Landing3Container>
    
    <StyledSlider {...settings}>  
        <Img src='../../imgs/landing3_sample1.svg'></Img>
        <Img src='../../imgs/landing3_sample2.svg'></Img>
        <Img src='../../imgs/landing3_sample3.svg'></Img>
        <Img src='../../imgs/landing3_sample4.svg'></Img>
        <Img src='../../imgs/landing3_sample5.svg'></Img>
        <Img src='../../imgs/landing3_sample6.svg'></Img>
        <Img src='../../imgs/landing3_sample7.svg'></Img>
    </StyledSlider>
    <ColContainer>
        <BlackText weight={"600"} size={"40px"} style={{textAlign:"center"}}>상세한 문항들로 원하는 조건을 체크하여<br/>정확한 자격진단을 할 수 있어요!</BlackText>
        <GrayText size={"14px"} marginTop={"10px"}>적격여부와 가점 , 그리고 부적격 사유까지 한 눈에 볼 수 있어요</GrayText>
    </ColContainer>
    </Landing3Container>
   
  )
}

export default Landing3
const Landing3Container=styled(ColContainer)`
    width: 80%;
    padding: 10% 0;
`
const StyledSlider=styled(Slider)`
    width: 70%;
    display:flex;
    justify-content: center;
    margin-bottom: 10%;
    .slick-list{
        width: 80%;
    }
`
const Img=styled.img`
    
`