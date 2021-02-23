import React from "react";
import styled from "styled-components";

const StyledListItemContainer = styled.li`
  margin-top: ${(props) => (props.questionIndex === 0 ? 0 : "100px")};
  margin-bottom: 2rem;
`;

const StyledQuestionContainer = styled.div`
  min-height: calc(345px / 1.5);
  position: relative;
  overflow: hidden;
  line-height: 1.1;
  font-weight: 900;
  word-wrap: normal;
  word-break: initial;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.theme === "red"
      ? "rgb(238, 50, 34)"
      : props.theme === "pink"
      ? "rgb(228, 12, 120)"
      : props.theme === "purple"
      ? "rgb(103, 68, 221)"
      : props.theme === "blue"
      ? "rgb(15, 101, 238)"
      : props.theme === "darkGreen"
      ? "rgb(3, 124, 124)"
      : props.theme === "lightGreen"
      ? "rgb(104, 175, 19)"
      : props.theme === "darkGray"
      ? "rgb(34, 34, 34)"
      : "rgb(0, 0, 0)"};
  margin-bottom: 2.5rem;
  @media (min-width: 52rem) {
    min-height: 345px;
  }
`;

const StyledQuestionText = styled.p`
  z-index: 3;
  margin: 0;
  line-height: 1.1;
  padding: 10px;
  font-weight: 900;
  font-size: calc(90px / 2);
  color: ${(props) =>
    props.theme === "red"
      ? "rgb(251, 158, 149)"
      : props.theme === "pink"
      ? "rgb(133, 33, 78)"
      : props.theme === "purple"
      ? "rgb(179, 161, 239)"
      : props.theme === "blue"
      ? "rgb(143, 178, 247)"
      : props.theme === "darkGreen"
      ? "rgb(145, 189, 189)"
      : props.theme === "lightGreen"
      ? "rgb(70, 105, 34)"
      : props.theme === "darkGray"
      ? "rgb(144, 144, 144)"
      : "rgb(255, 255, 255)"};
  @media (min-width: 52rem) {
    font-size: 90px;
    transform: scale(0.8);
  }
`;

const StyledQuestionAnswersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem 0.5rem;
`;

const StyledIndividualAnswerContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.6) : 1)};
  transition: opacity 0.5s ease;
  pointer-events: ${(props) => (props.resultsAvailable ? "none" : "auto")};
  background-color: ${(props) =>
    props.theme === "red"
      ? "rgb(238, 50, 34)"
      : props.theme === "pink"
      ? "rgb(228, 12, 120)"
      : props.theme === "purple"
      ? "rgb(103, 68, 221)"
      : props.theme === "blue"
      ? "rgb(15, 101, 238)"
      : props.theme === "darkGreen"
      ? "rgb(3, 124, 124)"
      : props.theme === "lightGreen"
      ? "rgb(104, 175, 19)"
      : props.theme === "darkGray"
      ? "rgb(34, 34, 34)"
      : "rgb(0, 0, 0)"};
  font-weight: 900;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14.5vh;

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

  @media (min-width: 40rem) {
    height: 208.73px;
  }

  @media (min-width: 52rem) {
    height: 204.83px;
  }

  &:hover {
    cursor: pointer;

    p {
      animation-name: bounceClick;
      animation-duration: 0.2s;
    }

    @media (min-width: 900px) {
      opacity: 1;

      p {
        animation-name: none;
        transform: scale(0.89);
        transition: transform 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }
  }

  & > p {
    padding: 0.25rem;
    position: absolute;
    z-index: 3;
    margin: 0 auto;
    right: 0;
    left: 0;
    color: ${(props) =>
      props.theme === "red"
        ? "rgb(251, 158, 149)"
        : props.theme === "pink"
        ? "rgb(133, 33, 78)"
        : props.theme === "purple"
        ? "rgb(179, 161, 239)"
        : props.theme === "blue"
        ? "rgb(143, 178, 247)"
        : props.theme === "darkGreen"
        ? "rgb(145, 189, 189)"
        : props.theme === "lightGreen"
        ? "rgb(70, 105, 34)"
        : props.theme === "darkGray"
        ? "rgb(144, 144, 144)"
        : "rgb(255, 255, 255)"};
    font-size: calc(50px / 2);
    @media (min-width: 52rem) {
      font-size: 60px;
      transform: scale(0.8);
    }
  }
`;

const Question = (props) => {
  const {
    item,
    questionIndex,
    generalTheme,
    resultsAvailable,
    selectedAnswers,
    changeSelectedAnswers,
    scrollFunction,
  } = props;

  const handleAnswerSelection = (questionIndex, answerIndex, resultID) => {
    if (selectedAnswers.some((item) => item.questionIndex === questionIndex)) {
      const arrCopy = selectedAnswers.slice();

      arrCopy.splice(
        arrCopy.findIndex((item) => item.questionIndex === questionIndex),
        1,
        { questionIndex, answerIndex, resultID }
      );

      changeSelectedAnswers(arrCopy);
      scrollFunction(`Question${questionIndex + 1}`, questionIndex);
    } else {
      changeSelectedAnswers([
        ...selectedAnswers,
        { questionIndex, answerIndex, resultID },
      ]);
      scrollFunction(`Question${questionIndex + 1}`, questionIndex);
    }
  };

  return (
    <StyledListItemContainer
      className="rbq_question"
      key={questionIndex}
      questionIndex={questionIndex}
      name={`Question${questionIndex}`}
    >
      <StyledQuestionContainer
        className="rbq_question_inner_container"
        theme={
          item.specificTheme
            ? item.specificTheme
            : generalTheme
            ? generalTheme
            : null
        }
      >
        <StyledQuestionText
          className="rbq_question_text"
          theme={
            item.specificTheme
              ? item.specificTheme
              : generalTheme
              ? generalTheme
              : null
          }
        >
          {item.question ? item.question : null}
        </StyledQuestionText>
      </StyledQuestionContainer>

      {item.answers ? (
        Array.isArray(item.answers) && item.answers.length > 0 ? (
          <StyledQuestionAnswersContainer className="rbq_answers_container">
            {item.answers.map((x, answerIndex) => {
              return (
                <StyledIndividualAnswerContainer
                  className="rbq_answer"
                  resultsAvailable={resultsAvailable}
                  answered={selectedAnswers.some(
                    (el) => el.questionIndex === questionIndex
                  )}
                  selected={selectedAnswers.some(
                    (el) =>
                      el.questionIndex === questionIndex &&
                      el.answerIndex === answerIndex
                  )}
                  key={answerIndex}
                  theme={
                    x.specificTheme
                      ? x.specificTheme
                      : generalTheme
                      ? generalTheme
                      : null
                  }
                  onClick={() =>
                    handleAnswerSelection(
                      questionIndex,
                      answerIndex,
                      x.resultID
                    )
                  }
                >
                  <p>{x.answer}</p>
                </StyledIndividualAnswerContainer>
              );
            })}
          </StyledQuestionAnswersContainer>
        ) : null
      ) : null}
    </StyledListItemContainer>
  );
};

export default Question;
