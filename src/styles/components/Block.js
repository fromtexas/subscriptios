import styled from "styled-components";
import { goldenrod, white } from "../variables";

export const Block = styled.div`
  padding: 10px;
  background-color: ${props => (props.active ? goldenrod : white)};
  border: ${props => (props.active ? "none" : "1px dashed #333")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  min-height: 10rem;
  transition: all 0.3s;
  filter: ${props => (props.grayscale ? "grayscale(1)" : "grayscale(0)")};
  &:hover {
    background-color: ${goldenrod};
  }
`;

export const SubBlock = styled(Block)`
  align-items: baseline;
`;
