import styled from "styled-components";

export const StyledQuestionAdjacentText = styled.h2`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.fontColor ? props.fontColor : "#000")};

  @media (min-width: 40rem) {
    font-size: 1.375rem;
    line-height: 1.27;
  }
`;