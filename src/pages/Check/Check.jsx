import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import Check1 from './Content/Check1'
import Check2 from './Content/Check2'
import Check3 from './Content/Check3'
import Check4 from './Content/Check4'

const Check = () => {
    const [index, setIndex]=useState(0);

  return (
    <ColContainer style={{width: "100%", height: "90vh"}}>
        <RowContainer style={{width: "80%", height: "95%", justifyContent:"center", marginTop:"5%", gap:'30px'}}>
            <img src='../../imgs/leftArrow.svg'
                onClick={()=>setIndex(index-1)}
            ></img>
                <CheckContainer>
                    {
                        index === 0 
                        ? <Check1/>
                        : index ===1
                        ? <Check2/>
                        : index===2
                        ? <Check3/>
                        : <Check4/>
                    }
                    
                </CheckContainer>
            <img src='../../imgs/rightArrow.svg'
                onClick={()=>setIndex(index+1)}
            ></img>
           
        </RowContainer>
        
    </ColContainer>
  )
}

export default Check
const CheckContainer=styled(ColContainer)`
    border: 1px solid #D3D3D3;
    border-radius: 25px;
    width: 80%;
    height: 90%;
    margin: 5% 0;
    padding: 8% 0;
`