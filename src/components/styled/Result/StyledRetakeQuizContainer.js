import styled from "styled-components";

export const StyledRetakeQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  cursor: pointer;
  svg {
    width: 1.125rem;
    height: 1.125rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    path {
      stroke: #fff;
    }
  }
  p {
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.3;
    font-weight: 700;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;