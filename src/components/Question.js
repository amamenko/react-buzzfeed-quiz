import React, { useEffect, useState } from "react";
import { StyledAnswerImage } from "./styled/Question/StyledAnswerImage";
import { StyledAnswerImageAttribution } from "./styled/Question/StyledAnswerImageAttribution";
import { StyledAnswerImageBottomTextContainer } from "./styled/Question/StyledAnswerImageBottomTextContainer";
import { StyledAnswerImageText } from "./styled/Question/StyledAnswerImageText";
import { StyledIndividualAnswerContainer } from "./styled/Question/StyledIndividualAnswerContainer";
import { StyledIndividualAnswerOuterContainer } from "./styled/Question/StyledIndividualAnswerOuterContainer";
import { StyledListItemContainer } from "./styled/Question/StyledListItemContainer";
import { StyledQuestionAdjacentText } from "./styled/Question/StyledQuestionAdjacentText";
import { StyledQuestionAnswersContainer } from "./styled/Question/StyledQuestionAnswersContainer";
import { StyledQuestionContainer } from "./styled/Question/StyledQuestionContainer";
import { StyledQuestionImageAttributionText } from "./styled/Question/StyledQuestionImageAttributionText";
import { StyledQuestionOverlapText } from "./styled/Question/StyledQuestionOverlapText";
import { StyledQuestionImageContainer } from "./styled/Question/StyledQuestionImageContainer";
import { StyledQuestionImage } from "./styled/Question/StyledQuestionImage";
import { StyledTextfit } from "./styled/Question/StyledTextfit";
import ScaleText from "react-scale-text";

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

  const [answerHovered, changeAnswerHovered] = useState("");

  // Necessary for ScaleText to refresh font-size right after component mount
  useEffect(() => {
    setTimeout(() => {
      changeAnswerHovered(0);
      changeAnswerHovered("");
    }, 400);
  }, []);

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

  const renderOverlapText = (item) => {
    if (item.questionRelativeToImage !== "adjacent") {
      return (
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
      );
    } else {
      return null;
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
      {item.backgroundImageSrc ? (
        <StyledQuestionImageContainer
          questionRelativeToImage={item.questionRelativeToImage}
          imageAttribution={item.imageAttribution}
        >
          <StyledQuestionImage
            className="rbq_question_image"
            src={item.backgroundImageSrc}
            alt={`Question ${questionIndex} Image`}
          />
          {renderOverlapText(item)}
        </StyledQuestionImageContainer>
      ) : (
        <StyledQuestionContainer
          className="rbq_question_inner_container"
          backgroundColor={
            item.backgroundColor
              ? item.backgroundColor
              : generalBackgroundColor
              ? generalBackgroundColor
              : null
          }
          questionRelativeToImage={item.questionRelativeToImage}
        >
          {renderOverlapText(item)}
        </StyledQuestionContainer>
      )}
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
                  onMouseEnter={() => changeAnswerHovered(answerIndex)}
                  onMouseLeave={() => changeAnswerHovered("")}
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
                    item.answerArrangement ===
                      "tile" ? null : item.answerArrangement === "row" ? (
                      <p className="rbq_answer_text">{x.answer}</p>
                    ) : (
                      <StyledTextfit
                        hovered={answerHovered === answerIndex}
                        fontColor={
                          x.fontColor
                            ? x.fontColor
                            : generalFontColor
                            ? generalFontColor
                            : null
                        }
                      >
                        <ScaleText>
                          <p>{x.answer}</p>
                        </ScaleText>
                      </StyledTextfit>
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
