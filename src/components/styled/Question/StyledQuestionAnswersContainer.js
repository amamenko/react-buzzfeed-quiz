import styled from "styled-components";

export const StyledQuestionAnswersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.answerArrangement === "row"
      ? "1fr"
      : props.anyImages
      ? "1fr 1fr"
      : props.numberOfAnswers >= 9 || props.numberOfAnswers === 3
      ? "1fr 1fr 1fr"
      : "1fr 1fr"};
  grid-template-rows: ${(props) =>
    props.answerArrangement === "row"
      ? "1fr"
      : props.anyImages
      ? "none"
      : props.numberOfAnswers >= 9
      ? "1fr 1fr 1fr"
      : props.numberOfAnswers === 3
      ? "1fr"
      : "1fr 1fr"};
  grid-gap: ${(props) =>
    props.anyImages
      ? "0.5rem 0.5rem"
      : props.numberOfAnswers >= 9 ||
        (props.numberOfAnswers % 3 === 0 && props.numberOfAnswers % 2 !== 0)
      ? "0.75rem 0.75rem"
      : "0.5rem 0.5rem"};
`;