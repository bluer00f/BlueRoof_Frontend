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
`;
