import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	border: ${({ border }) => border};
`;

export const BorderWhiteBtn = styled(Button)`
	background-color: transparent;
	border: solid 1px #FFFFFF;
	font-size: 16px;
    color: #000000;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;

export const BlueRoundBtn=styled(Button)`
	background: #0028FF;
	border-radius: 40px;
	color: #FFFFFF;
`
export const RadioBtn=styled.input`
appearance: none;
width:20px;
height:20px;
border: 2px solid #000000;
vertical-align: middle;
border-radius: 100%; 
margin-right: 10px;
margin-bottom: 5px;
:checked{
	background-color: #000000;
}
`