import styled from 'styled-components'

export const BlackText=styled.div`
    font-size: ${props=> props.size};
    color: #000000;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`
export const WhiteText=styled.div`
    font-size: ${props=> props.size ? props.size : "16px"};
    color: #FFFFFF;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`
export const BlueText=styled.div`
    font-size: ${props=> props.size ? props.size : "16px"};
    color: #0028FF;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`
export const GrayText=styled.div`
     font-size: ${props=> props.size ? props.size : "16px"};
    color: #616771;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`