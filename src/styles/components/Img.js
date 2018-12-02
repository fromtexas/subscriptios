import styled from "styled-components";

export const Img = styled.img`
  display: block;
  width: ${props => (props.width ? props.width : "50%")};
`;
