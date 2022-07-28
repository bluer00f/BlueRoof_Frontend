import styled from "styled-components";

export const DropDownBtn=styled.button`
	background: #FFFFFF;
	border-radius: 40px;
	border: 1px solid #BECBFF;
	color: black;
	width: ${({ width }) => width};
	height: ${({height})=> height ? height : "70px"};
`;

export const Li = styled.li`
    list-style: none;
`;

export const Ul = styled.ul`
    list-style: none;
    font-size:  15px;
    color: #000000;
`;