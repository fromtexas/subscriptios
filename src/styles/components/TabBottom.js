import styled from "styled-components";
import { lightSlateGray } from "../variables";

export const TabBottom = styled.div`
  background-color: ${lightSlateGray};
  padding: 3rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;
