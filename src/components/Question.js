import React from "react";
import styled from "styled-components";

const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== "";
};

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
    props.backgroundColor
      ? isColor(props.backgroundColor)
        ? props.backgroundColor
        : "#000"
      : "#000"};
  margin-bottom: 2.5rem;
  background-image: ${(props) =>
    props.backgroundImageSrc ? `url(${props.backgroundImageSrc})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 52rem) {
    min-height: 345px;
  }
`;

const StyledQuestionText = styled.p`
  z-index: 3;
  margin: 0;
  line-height: 1.1;
  text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  -webkit-text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  padding: 10px;
  font-weight: 900;
  font-size: calc(90px / 2);
  color: ${(props) =>
    props.fontColor
      ? isColor(props.fontColor)
        ? props.fontColor
        : "#fff"
      : "#fff"};
  @media (min-width: 52rem) {
    font-size: 90px;
    transform: scale(0.8);
  }
`;

const StyledQuestionAnswersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.numberOfAnswers >= 9 ? "1fr 1fr 1fr" : "1fr 1fr"};
  grid-template-rows: ${(props) =>
    props.numberOfAnswers >= 9 ? "1fr 1fr 1fr" : "1fr 1fr"};
  grid-gap: ${(props) =>
    props.numberOfAnswers >= 9 ? "0.75rem 0.75rem" : "0.5rem 0.5rem"};
`;

const StyledIndividualAnswerContainer = styled.div`
  border: 1px solid #f4f4f4;
  position: relative;
  width: 100%;
  padding: 0;
  border-radius: ${(props) => (props.backgroundImageSrc ? 0 : "4px")};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.6) : 1)};
  transition: opacity 0.5s ease;
  pointer-events: ${(props) => (props.resultsAvailable ? "none" : "auto")};
  background: ${(props) =>
    props.backgroundColor
      ? isColor(props.backgroundColor)
        ? props.backgroundColor
        : "#000"
      : "#000"};
  font-weight: 900;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.numberOfAnswers >= 9 ? "fit-content" : "14.5vh")};
  line-height: 1.1;
  word-wrap: normal;
  word-break: initial;
  text-align: center;
  font-size: ${(props) =>
    props.numberOfAnswers >= 9
      ? props.answer
        ? props.answer.length >= 10
          ? "15px"
          : props.answer.length >= 7
          ? "24px"
          : "33px"
        : null
      : "33px"};

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    position: relative;
    z-index: 1;
    padding-bottom: 100%;
  }

  &:hover {
    img {
      transform: scale(1.1);
      transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    }
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
      props.answer
        ? props.answer.length >= 10
          ? props.numberOfAnswers >= 9
            ? "calc(42px/2)"
            : "calc(55px/2)"
          : "calc(55px/2)"
        : "calc(55px/2)"};
  }

  @media (min-width: 40rem) {
    height: ${(props) =>
      props.numberOfAnswers >= 9 ? "194.66px" : "208.73px"};
  }

  @media (min-width: 52rem) {
    height: ${(props) =>
      props.numberOfAnswers >= 9 ? "194.66px" : "204.83px"};
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
        transform: scale(0.85);
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
    word-break: break-word;

    text-stroke: ${(props) =>
      props.backgroundImageSrc ? "calc(1px / 1.5) #000000" : 0};
    -webkit-text-stroke: ${(props) =>
      props.backgroundImageSrc ? "calc(1px / 1.5) #000000" : 0};
    color: ${(props) =>
      props.fontColor
        ? isColor(props.fontColor)
          ? props.fontColor
          : "#fff"
        : "#fff"};

    @media (min-width: 40rem) {
      font-size: calc(55px / 2);
      text-stroke: ${(props) =>
        props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
      -webkit-text-stroke: ${(props) =>
        props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
    }

    @media (min-width: 52rem) {
      font-size: ${(props) =>
        props.numberOfAnswers >= 9
          ? props.answer
            ? props.answer.length >= 10
              ? "30px"
              : props.answer.length >= 7
              ? "48px"
              : "60px"
            : null
          : props.answer.length >= 18
          ? "40px"
          : props.answer.length >= 11
          ? "47px"
          : "60px"};
      transform: scale(0.8);
    }
  }
`;

const StyledAnswerImage = styled.img`
  position: absolute;
  height: 100%;
  background-image: ${(props) =>
    props.backgroundImageSrc ? `url(${props.backgroundImageSrc})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Question = (props) => {
  const {
    item,
    questionIndex,
    generalBackgroundColor,
    generalFontColor,
    resultsAvailable,
    selectedAnswers,
    changeSelectedAnswers,
    scrollFunction,
    onAnswerSelection,
  } = props;

  const handleAnswerSelection = (
    questionIndex,
    answerIndex,
    resultID,
    specificHandleAnswerSelection
  ) => {
    const handleGeneralAnswerSelection = () => {
      if (onAnswerSelection) {
        if (typeof onAnswerSelection === "function") {
          onAnswerSelection();
        }
      }
    };

    if (specificHandleAnswerSelection) {
      if (typeof specificHandleAnswerSelection === "function") {
        specificHandleAnswerSelection();
      } else {
        handleGeneralAnswerSelection();
      }
    } else {
      handleGeneralAnswerSelection();
    }

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
        backgroundImageSrc={item.backgroundImageSrc}
        backgroundColor={
          item.backgroundColor
            ? item.backgroundColor
            : generalBackgroundColor
            ? generalBackgroundColor
            : null
        }
      >
        <StyledQuestionText
          className="rbq_question_text"
          backgroundImageSrc={item.backgroundImageSrc}
          fontColor={
            item.fontColor
              ? item.fontColor
              : generalFontColor
              ? generalFontColor
              : null
          }
        >
          {item.question ? item.question : null}
        </StyledQuestionText>
      </StyledQuestionContainer>

      {item.answers ? (
        Array.isArray(item.answers) && item.answers.length > 0 ? (
          <StyledQuestionAnswersContainer
            className="rbq_answers_container"
            numberOfAnswers={item.answers.length}
          >
            {item.answers.map((x, answerIndex) => {
              return (
                <div>
                  <StyledIndividualAnswerContainer
                    className="rbq_answer"
                    numberOfAnswers={item.answers.length}
                    answer={x.answer}
                    backgroundImageSrc={x.backgroundImageSrc}
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
                    backgroundColor={
                      x.backgroundColor
                        ? x.backgroundColor
                        : generalBackgroundColor
                        ? generalBackgroundColor
                        : null
                    }
                    fontColor={
                      x.fontColor
                        ? x.fontColor
                        : generalFontColor
                        ? generalFontColor
                        : null
                    }
                    onClick={() =>
                      handleAnswerSelection(
                        questionIndex,
                        answerIndex,
                        x.resultID,
                        x.onAnswerSelection
                      )
                    }
                  >
                    {x.backgroundImageSrc ? (
                      <StyledAnswerImage
                        src={x.backgroundImageSrc}
                        alt={`${x.answer} Answer Image`}
                      />
                    ) : null}

                    {x.backgroundImageSrc ? null : <p>{x.answer}</p>}
                  </StyledIndividualAnswerContainer>
                  {x.backgroundImageSrc ? (
                    <div
                      style={{
                        padding: "0.5rem",
                        margin: "0",
                        borderBottom: "1px solid #f4f4f4",
                        borderLeft: "1px solid #f4f4f4",
                        borderRight: "1px solid #f4f4f4",
                        color: selectedAnswers.some(
                          (el) =>
                            el.questionIndex === questionIndex &&
                            el.answerIndex === answerIndex
                        )
                          ? "#fff"
                          : "#222",
                        background: selectedAnswers.some(
                          (el) =>
                            el.questionIndex === questionIndex &&
                            el.answerIndex === answerIndex
                        )
                          ? "#0f65ef"
                          : "#fff",
                        lineHeight: "1.3",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "1.125rem",
                          margin: 0,
                        }}
                      >
                        {x.answer}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </StyledQuestionAnswersContainer>
        ) : null
      ) : null}
    </StyledListItemContainer>
  );
};

export default Question;
