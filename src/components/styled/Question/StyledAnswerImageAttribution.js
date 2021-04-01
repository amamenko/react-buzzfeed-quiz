import styled from "styled-components";

export const StyledAnswerImageAttribution = styled.p`
  display: block;
  padding: 0.5rem;
  padding-top: 0;
  margin: 0;
  margin-top: 0;
  color: ${(props) =>
    props.answered ? (props.selected ? "#fff" : "#666") : "#666"};
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.75) : 1)};
  font-size: 0.875rem;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.5s ease color 0.5s ease;
  @media (min-width: 52rem) {
    padding: 1rem;
    padding-top: 0;
  }
`;