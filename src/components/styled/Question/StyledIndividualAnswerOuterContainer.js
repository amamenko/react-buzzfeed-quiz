import styled from "styled-components";

export const StyledIndividualAnswerOuterContainer = styled.div`
  overflow: hidden;
  border-bottom: ${(props) =>
    props.answerArrangement === "row" ? "none" : "1px solid #f4f4f4"};
  border-left: ${(props) =>
    props.answerArrangement === "row" ? "none" : "1px solid #f4f4f4"};
  border-right: ${(props) =>
    props.answerArrangement === "row" ? "none" : "1px solid #f4f4f4"};
  border: 1px solid #f4f4f4;
  max-height: ${(props) =>
    props.answerArrangement === "row" ? "55px" : "none"};
  background: #fff;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;

  p {
    transform: scale(1);
    transition: ${(props) =>
      props.answerArrangement === "row"
        ? "transform 0.2s cubic-bezier(0, 0.73, 0.31, 1.67)"
        : "transform 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53)"};
  }

  &:hover {
    pointer-events: ${(props) => (props.resultsAvailable ? "none" : "all")};
    cursor: ${(props) =>
      props.answered ? (props.selected ? "auto" : "pointer") : "pointer"};
    -webkit-box-shadow: ${(props) =>
      props.resultsAvailable
        ? "0 1px 1px rgb(173 168 168 / 10%)"
        : "0px 0px 1px 3px rgb(173 168 168 / 10%)"};
    box-shadow: ${(props) =>
      props.resultsAvailable
        ? "0 1px 1px rgb(173 168 168 / 10%)"
        : "0px 0px 1px 3px rgb(173 168 168 / 10%)"};
    img {
      transform: ${(props) =>
        props.answered
          ? props.selected
            ? "scale(1)"
            : "scale(1.1)"
          : "scale(1.1)"};
      transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    }
    p {
      @media (min-width: 900px) {
        transform: ${(props) =>
          props.resultsAvailable
            ? "scale(1)"
            : props.answerArrangement === "row"
            ? props.answered
              ? props.selected
                ? "scale(1)"
                : "scale(1.01)"
              : "scale(1.01)"
            : props.answered
            ? props.selected
              ? "scale(1)"
              : props.backgroundImageSrc
              ? "scale(1)"
              : "scale(1.05)"
            : props.backgroundImageSrc
            ? "scale(1)"
            : "scale(1.05)"};
      }

      transition: ${(props) =>
        props.answerArrangement === "row"
          ? "transform 0.2s cubic-bezier(0, 0.73, 0.31, 1.67)"
          : "transform 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53)"};
    }
    * {
      opacity: ${(props) => (props.resultsAvailable ? null : 1)};
      transition: opacity 0.5s ease;
    }
  }
`;