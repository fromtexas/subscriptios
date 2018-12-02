import styled from "styled-components";
import { yellow, goldenrod, black, brown, darkSlateGray } from "../variables";

export const Button = styled.button`
  height: 6rem;
  border-radius: 5rem;
  min-width: 15rem;
  display: flex;
  cursor: pointer;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;
  color: ${props => (props.disabled ? darkSlateGray : black)};
  border: ${props => (props.disabled ? `1px solid ${darkSlateGray}` : "none")};
  background-color: transparent;
  box-shadow: ${props => (props.disabled ? "none" : `0px 2px 3px ${brown}`)};
  background-image: ${props =>
    !props.disabled && `linear-gradient(${goldenrod}, ${yellow})`};
  grid-column: ${props => props.cols};
  justify-self: baseline;
  transition: all 0.2s;
  &:focus {
    box-shadow: inset 0px 1px 15px ${darkSlateGray};
    outline: none;
    transform: translateY(2px);
  }
`;
