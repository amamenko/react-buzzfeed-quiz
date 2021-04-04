import styled from "styled-components";

export const StyledQuestionImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  min-height: ${(props) =>
    props.questionRelativeToImage === "adjacent"
      ? "calc(277px / 1.5)"
      : "calc(345px / 1.5)"};
  overflow: hidden;
  font-weight: 900;
  word-wrap: normal;
  word-break: initial;
  border-radius: 3px;
  margin-bottom: ${(props) => (props.imageAttribution ? 0 : "1rem")};

  @media (min-width: 320px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(322px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 360px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(384px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 400px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(424px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 500px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(568px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 40rem) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "420px"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 52rem) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent" ? "420px" : "345px"};
  }
`;
