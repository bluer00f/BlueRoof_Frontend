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