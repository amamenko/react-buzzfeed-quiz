import styled from "styled-components";

export const StyledAnswerImageText = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0;
  padding: 0.5rem;
  overflow: hidden;
  max-width: 100%;
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.6) : 1)};
  @media (min-width: 52rem) {
    padding: 1rem;
    padding-bottom: 0.5rem;
  }
`;
