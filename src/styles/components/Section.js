import styled from "styled-components";
import { lightSlateGray, white } from "../variables";

export const Section = styled.section`
  border-bottom: 2px solid ${lightSlateGray};
  background-color: ${white};
  padding: 3rem 4rem;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 1.5rem;
`;
