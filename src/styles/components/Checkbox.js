import styled from "styled-components";
import checked from "../../img/checkbox-tick.png";
import { darkSlateGray, goldenrod, white } from "../variables";

export const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid ${darkSlateGray};
  background-color: ${white};
  position: relative;
  border-radius: 2px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:checked {
    border-color: ${goldenrod};
    &::before {
      opacity: 1;
      content: "";
      position: absolute;
      background-image: url(${checked});
      background-position: center;
      background-size: cover;
      width: 20px;
      height: 20px;
      top: -8px;
      bottom: 0;
      left: 2px;
      right: 0;
    }
  }
`;

export const CheckboxWrap = styled.label`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
`;
