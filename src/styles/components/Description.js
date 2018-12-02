import styled from "styled-components";
import { black, darkSlateGray, brown } from "../variables";

export const Description = styled.p`
  color: ${darkSlateGray};
  font-size: 1.4rem;
  grid-column: ${props => (props.cols ? props.cols : "auto")};
  width: ${props => props.width};
`;

export const Label = styled(Description)`
  color: ${props => (props.gray ? darkSlateGray : black)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1.6rem")};
  font-weight: ${props => props.fontWeight};
`;

export const Price = styled(Label)`
  margin-top: 0.5rem;
  color: ${brown};
`;

export const Inline = styled.span`
  display: flex;
  align-items: ${props => (props.align ? props.align : "baseline")};
  margin-top: 1rem;
`;
