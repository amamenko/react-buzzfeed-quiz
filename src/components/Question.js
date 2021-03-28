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
  min-height: ${(props) =>
    props.questionRelativeToImage === "adjacent"
      ? "calc(277px / 1.5)"
      : "calc(345px / 1.5)"};
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
  margin-bottom: ${(props) => (props.imageAttribution ? 0 : "1rem")};
  background-image: ${(props) =>
    props.backgroundImageSrc ? `url(${props.backgroundImageSrc})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
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
        ? "443px"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 52rem) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent" ? "443px" : "345px"};
  }
`;

const StyledQuestionAdjacentText = styled.h2`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${(props) =>
    props.fontColor
      ? isColor(props.fontColor)
        ? props.fontColor
        : "#000"
      : "#000"};

  @media (min-width: 40rem) {
    font-size: 1.375rem;
    line-height: 1.27;
  }
`;

const StyledQuestionOverlapText = styled.p`
  z-index: 3;
  margin: 0;
  line-height: 1.1;
  text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  -webkit-text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  padding: 10px;
  font-weight: 900;
  font-size: calc(62px / 2);
  color: ${(props) =>
    props.fontColor
      ? isColor(props.fontColor)
        ? props.fontColor
        : "#fff"
      : "#fff"};
  @media (min-width: 40rem) {
    font-size: calc(55px / 1.5);
  }
  @media (min-width: 52rem) {
    font-size: 55px;
    transform: scale(0.8);
  }
`;

const StyledQuestionImageAttributionText = styled.p`
  color: #222;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.3;
  display: block;
  position: relative;
  z-index: 100;
`;

const StyledQuestionAnswersContainer = styled.div`
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

const StyledIndividualAnswerOuterContainer = styled.div`
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

      @media (min-width: 52rem) {
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

const StyledIndividualAnswerContainer = styled.div`
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
      ? isColor(props.backgroundColor)
        ? props.backgroundColor
        : "#000"
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
        ? isColor(props.fontColor)
          ? props.fontColor
          : "#fff"
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

const StyledAnswerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledAnswerImageBottomTextContainer = styled.div`
  width: 100%;
  margin: 0;
  -webkit-box-shadow: inset 0 0 0 8px rgb(0 0 0 / 0%);
  box-shadow: inset 0 0 0 8px rgb(0 0 0 / 0%);
  color: ${(props) => (props.selected ? "#fff" : "#222")};
  background: ${(props) => (props.selected ? "#0f65ef" : "#fff")};
  line-height: 1.3;
`;

const StyledAnswerImageText = styled.p`
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

const StyledAnswerImageAttribution = styled.p`
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
      questionIndex={questionIndex}
      name={`Question${questionIndex}`}
    >
      {item.questionRelativeToImage === "adjacent" ? (
        <StyledQuestionAdjacentText
          className="rbq_question_adjacent_text"
          fontColor={
            item.fontColor
              ? item.fontColor
              : generalFontColor
              ? generalFontColor
              : null
          }
        >
          {item.question ? item.question : null}
        </StyledQuestionAdjacentText>
      ) : null}
      <StyledQuestionContainer
        className="rbq_question_inner_container"
        imageAttribution={item.imageAttribution}
        backgroundImageSrc={item.backgroundImageSrc}
        backgroundColor={
          item.backgroundColor
            ? item.backgroundColor
            : generalBackgroundColor
            ? generalBackgroundColor
            : null
        }
        questionRelativeToImage={item.questionRelativeToImage}
      >
        {item.questionRelativeToImage !== "adjacent" ? (
          <StyledQuestionOverlapText
            className="rbq_question_overlap_text"
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
          </StyledQuestionOverlapText>
        ) : null}
      </StyledQuestionContainer>
      {item.backgroundImageSrc && item.imageAttribution ? (
        <StyledQuestionImageAttributionText className="rbq_question_attribution">
          <i>{item.imageAttribution}</i>
        </StyledQuestionImageAttributionText>
      ) : null}

      {item.answers ? (
        Array.isArray(item.answers) && item.answers.length > 0 ? (
          <StyledQuestionAnswersContainer
            className="rbq_answers_container"
            numberOfAnswers={item.answers.length}
            anyImages={item.answers.some((answer) => answer.backgroundImageSrc)}
            answerArrangement={item.answerArrangement}
          >
            {item.answers.map((x, answerIndex) => {
              return (
                <StyledIndividualAnswerOuterContainer
                  className="rbq_answer_container"
                  key={answerIndex}
                  resultsAvailable={resultsAvailable}
                  answerArrangement={item.answerArrangement}
                  answered={selectedAnswers.some(
                    (el) => el.questionIndex === questionIndex
                  )}
                  selected={selectedAnswers.some(
                    (el) =>
                      el.questionIndex === questionIndex &&
                      el.answerIndex === answerIndex
                  )}
                  backgroundImageSrc={x.backgroundImageSrc}
                  onClick={() =>
                    handleAnswerSelection(
                      questionIndex,
                      answerIndex,
                      x.resultID,
                      x.onAnswerSelection
                    )
                  }
                >
                  <StyledIndividualAnswerContainer
                    className="rbq_answer"
                    numberOfAnswers={item.answers.length}
                    answerArrangement={item.answerArrangement}
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
                  >
                    {x.backgroundImageSrc &&
                    item.answerArrangement !== "row" ? (
                      <StyledAnswerImage
                        className="rbq_answer_image"
                        src={x.backgroundImageSrc}
                        alt={`${x.answer} Answer Image`}
                      />
                    ) : null}

                    {x.backgroundImageSrc &&
                    item.answerArrangement === "tile" ? null : (
                      <p className="rbq_answer_text">{x.answer}</p>
                    )}
                  </StyledIndividualAnswerContainer>
                  {x.backgroundImageSrc && item.answerArrangement === "tile" ? (
                    <StyledAnswerImageBottomTextContainer
                      className="rbq_answer_image_text_container"
                      selected={selectedAnswers.some(
                        (el) =>
                          el.questionIndex === questionIndex &&
                          el.answerIndex === answerIndex
                      )}
                    >
                      {x.answer ? (
                        <StyledAnswerImageText
                          className="rbq_answer_image_text"
                          answered={selectedAnswers.some(
                            (el) => el.questionIndex === questionIndex
                          )}
                          selected={selectedAnswers.some(
                            (el) =>
                              el.questionIndex === questionIndex &&
                              el.answerIndex === answerIndex
                          )}
                        >
                          {x.answer}
                        </StyledAnswerImageText>
                      ) : null}
                      {x.imageAttribution ? (
                        <StyledAnswerImageAttribution
                          className="rbq_answer_attribution"
                          answered={selectedAnswers.some(
                            (el) => el.questionIndex === questionIndex
                          )}
                          selected={selectedAnswers.some(
                            (el) =>
                              el.questionIndex === questionIndex &&
                              el.answerIndex === answerIndex
                          )}
                        >
                          {x.imageAttribution}
                        </StyledAnswerImageAttribution>
                      ) : null}
                    </StyledAnswerImageBottomTextContainer>
                  ) : null}
                </StyledIndividualAnswerOuterContainer>
              );
            })}
          </StyledQuestionAnswersContainer>
        ) : null
      ) : null}
    </StyledListItemContainer>
  );
};

export default Question;
