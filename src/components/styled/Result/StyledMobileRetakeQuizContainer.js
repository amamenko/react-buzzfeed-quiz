import styled from "styled-components";

export const StyledMobileRetakeQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  line-height: 0;
  cursor: pointer;
  svg {
    width: 1.125rem;
    height: 1.125rem;
    path {
      stroke: #fff;
    }
  }
  p {
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.3;
    margin: 0;
    padding-left: 0.5rem;
    font-weight: 700;
  }
  @media (min-width: 40rem) {
    display: none;
  }
`;