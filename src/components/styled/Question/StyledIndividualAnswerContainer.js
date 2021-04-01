import styled from "styled-components";

export const StyledIndividualAnswerContainer = styled.div`
  border-bottom: ${(props) =>
    props.answerArrangement === "row" ? "none" : "1px solid #f4f4f4"};
  position: relative;
  width: 100%;
  padding: 0;
  border-radius: ${(props) => (props.backgroundImageSrc ? 0 : "4px")};
  border-top-left-radius: ${(props) =>
    props.answerArrangement === "row" ? 0 : "4px"};
  border-top-right-radius: ${(props) =>
    props.answerArrangement === "row" ? 0 : "4px"};
  overflow: hidden;
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.6) : 1)};
  transition: opacity 0.5s ease;
  pointer-events: ${(props) => (props.resultsAvailable ? "none" : "auto")};
  background: ${(props) =>
    props.answerArrangement === "row"
      ? props.answered
        ? props.selected
          ? "#0f65ef"
          : "#fff"
        : "#fff"
      : props.backgroundColor
      ? props.backgroundColor
      : props.backgroundImageSrc
      ? "none"
      : "#000"};
  font-weight: ${(props) => (props.answerArrangement === "row" ? 700 : 900)};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.answerArrangement === "row" ? "flex-start" : "center"};
  height: ${(props) => (props.numberOfAnswers >= 9 ? "fit-content" : "14.5vh")};
  line-height: 1.1;
  word-wrap: normal;
  word-break: initial;
  text-align: center;
  font-size: ${(props) =>
    props.answerArrangement === "row"
      ? "1.125rem"
      : props.numberOfAnswers >= 9
      ? props.answer
        ? props.answer.length >= 10
          ? "16px"
          : props.answer.length >= 7
          ? "22px"
          : "31px"
        : null
      : "22px"};

  &:before {
    content: "";
    display: ${(props) => (props.backgroundImageSrc ? "none" : "block")};
    width: 100%;
    height: 0;
    position: relative;
    z-index: 1;
    padding-bottom: 75.7%;
  }
  @keyframes bounceClick {
    0% {
      transform: none;
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: none;
    }
  }
  @media (min-width: 25rem) {
    font-size: ${(props) =>
      props.answerArrangement === "row"
        ? "1.125rem"
        : props.answer
        ? props.answer.length >= 10
          ? props.numberOfAnswers >= 9
            ? "calc(38px/2)"
            : "calc(46px/2)"
          : "calc(46px/2)"
        : "calc(46px/2)"};
  }
  @media (min-width: 40rem) {
    height: ${(props) =>
      props.answerArrangement === "row"
        ? "55px"
        : props.numberOfAnswers >= 9 ||
          (props.numberOfAnswers % 3 === 0 && props.numberOfAnswers % 2 !== 0)
        ? "194.66px"
        : "208.73px"};
    &:before {
      padding-bottom: 100%;
    }
  }
  @media (min-width: 52rem) {
    height: ${(props) =>
      props.answerArrangement === "row"
        ? "55px"
        : props.numberOfAnswers >= 9 ||
          (props.numberOfAnswers % 3 === 0 && props.numberOfAnswers % 2 !== 0)
        ? "194.66px"
        : "204.83px"};
  }
  & > p {
    padding-left: ${(props) =>
      props.answerArrangement === "row" ? "1rem" : 0};
    margin: ${(props) => (props.answerArrangement === "row" ? null : "0 auto")};
    position: absolute;
    z-index: 3;
    right: ${(props) => (props.answerArrangement === "row" ? "auto" : 0)};
    left: 0;
    top: ${(props) => (props.answerArrangement === "row" ? 0 : "auto")};
    bottom: ${(props) => (props.answerArrangement === "row" ? 0 : "auto")};
    word-break: break-word;
    width: 100%;

    text-align: ${(props) =>
      props.answerArrangement === "row" ? "left" : "center"};
    text-stroke: ${(props) =>
      props.answerArrangement === "row"
        ? 0
        : props.backgroundImageSrc
        ? "calc(1px / 1.5) #000000"
        : 0};
    -webkit-text-stroke: ${(props) =>
      props.answerArrangement === "row"
        ? 0
        : props.backgroundImageSrc
        ? "calc(1px / 1.5) #000000"
        : 0};
    color: ${(props) =>
      props.answerArrangement === "row"
        ? props.answered
          ? props.selected
            ? "#fff"
            : "#000"
          : "#000"
        : props.fontColor
        ? props.fontColor
        : "#fff"};
    @media (min-width: 40rem) {
      text-stroke: ${(props) =>
        props.answerArrangement === "row"
          ? 0
          : props.backgroundImageSrc
          ? "calc(2px / 1.5) #000000"
          : 0};
      -webkit-text-stroke: ${(props) =>
        props.answerArrangement === "row"
          ? 0
          : props.backgroundImageSrc
          ? "calc(2px / 1.5) #000000"
          : 0};
    }
    @media (min-width: 52rem) {
      font-size: ${(props) =>
        props.answerArrangement === "row"
          ? "1.125rem"
          : props.numberOfAnswers >= 9
          ? props.answer
            ? props.answer.length >= 10
              ? "30px"
              : props.answer.length >= 7
              ? "48px"
              : "60px"
            : null
          : props.answer
          ? props.answer.length >= 18
            ? "40px"
            : props.answer.length >= 11
            ? "47px"
            : "60px"
          : null};
    }
  }

  &:hover {
    cursor: ${(props) =>
      props.answered ? (props.selected ? "auto" : "pointer") : "pointer"};
    p {
      animation-name: ${(props) =>
        props.resultsAvailable
          ? "none"
          : props.answerArrangement === "row"
          ? "none"
          : props.answered
          ? props.selected
            ? "none"
            : "bounceClick"
          : "bounceClick"};
      animation-duration: 0.2s;
    }
    @media (min-width: 900px) {
      opacity: 1;
      p {
        animation-name: none;
      }
    }
  }
`;