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
    color: #FFFFFF;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;
