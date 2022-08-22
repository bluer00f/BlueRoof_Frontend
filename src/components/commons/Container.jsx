import styled from "styled-components";
import Flex from "./Flex";

export const Container=styled(Flex)`
    min-height: 100vh;
	flex-direction: column;
	align-items: center;
`
export const RowContainer = styled(Flex)`
	flex-direction: row;
	align-items: center;
`;

export const ColContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
`;
export const GridContainer = styled(Flex)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	grid-gap: 10px;
`;
export const InputContainer=styled(RowContainer)`
	width: 80%;
	gap: 5%;
`