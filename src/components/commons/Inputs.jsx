import styled from 'styled-components'

export const RoundInput=styled.input`
    width: ${({ width }) => width};
    height: ${({height})=> height ? height : "70px"};
    padding-left: 3%;
    border: 1px solid #BECBFF;
    border-radius: 40px;
    ::placeholder{
        color: black;
        font-weight: 500;
    }
`
export const DateInput=styled(RoundInput)`
    ::before{
        content: ${props=> props.placeholder};
    };

    :focus::before, 
    :valid::before{
        display: none;
    }
`