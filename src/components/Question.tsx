import React, { useEffect, useState, FC, useRef } from "react";
// import ScaleText from "react-scale-text";
import { ScrollElement } from "react-scroll";
import {
  QuestionType,
  QuestionProps,
  ListItemContainerElementProps,
} from "../interfaces";

const Question: FC<QuestionProps> = (props) => {
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

  const [answerHovered, changeAnswerHovered] = useState<number | null>(null);

  // Necessary for ScaleText to refresh font-size right after component mount
  useEffect(() => {
    setTimeout(() => {
      changeAnswerHovered(0);
      changeAnswerHovered(null);
    }, 400);
  }, []);

  const handleAnswerSelection = (
    questionIndex: number,
    answerIndex: number,
    resultID: number,
    specificHandleAnswerSelection?: () => void
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

  const renderOverlapText = (item: QuestionType) => {
    if (item.questionRelativeToImage !== "adjacent") {
      return (
        <p
          className={`rbq_question_overlap_text ${
            item.backgroundImageSrc && "rbq_question_with_bg_image"
          }`}
          style={{
            color: item.fontColor
              ? item.fontColor
              : generalFontColor
              ? generalFontColor
              : "#fff",
          }}
        >
          {item.question ? item.question : null}
        </p>
      );
    } else {
      return null;
    }
  };

  const listItemContainerRef = useRef(null);

  const ListItemContainerElement: FC<ListItemContainerElementProps> = (
    elProps
  ) => (
    <li {...elProps} ref={listItemContainerRef}>
      {elProps.children}
    </li>
  );

  const ListItemContainerScrollElement = ScrollElement(
    ListItemContainerElement
  );

  return (
    <ListItemContainerScrollElement
      className={`rbq_question ${questionIndex === 0 && "rbq_first_question"}`}
      name={`Question${questionIndex}`}
    >
      {item.questionRelativeToImage === "adjacent" ? (
        <h2
          className="rbq_question_adjacent_text"
          style={{
            color: item.fontColor
              ? item.fontColor
              : generalFontColor
              ? generalFontColor
              : "#000",
          }}
        >
          {item.question ? item.question : null}
        </h2>
      ) : null}
      {item.backgroundImageSrc ? (
        <div
          className={`rbq_question_image_container ${
            item.questionRelativeToImage === "adjacent" &&
            "rbq_question_adjacent_to_image"
          } ${item.imageAttribution && "rbq_image_attribution"}`}
        >
          <img
            className="rbq_question_image"
            src={item.backgroundImageSrc}
            alt={`Question ${questionIndex} Image`}
          />
          {renderOverlapText(item)}
        </div>
      ) : (
        <div
          className={`rbq_question_inner_container ${
            item.questionRelativeToImage === "adjacent" &&
            "rbq_question_adjacent_to_image"
          }`}
          style={{
            backgroundColor: item.backgroundColor
              ? item.backgroundColor
              : generalBackgroundColor
              ? generalBackgroundColor
              : "#000",
          }}
        >
          {renderOverlapText(item)}
        </div>
      )}
      {item.backgroundImageSrc && item.imageAttribution ? (
        <p className="rbq_question_image_attribution_text">
          <i>{item.imageAttribution}</i>
        </p>
      ) : null}

      {item.answers &&
        (Array.isArray(item.answers) && item.answers.length > 0 ? (
          <div
            className={`rbq_answers_container ${
              item.answerArrangement === "row" && "rbq_answer_row_arrangement"
            } ${
              item.answers.some((answer) => answer.backgroundImageSrc) &&
              "rbq_answers_contain_images"
            } ${item.answers.length >= 9 && "rbq_more_than_9_answers"} ${
              item.answers.length === 3 && "rbq_3_answers"
            } ${
              item.answers.length >= 9 ||
              (item.answers.length % 3 === 0 && item.answers.length % 2 !== 0)
                ? "rbq_answer_grid_layout"
                : null
            }`}
          >
            {item.answers.map((x, answerIndex) => {
              const questionAnswered = selectedAnswers.some(
                (el) => el.questionIndex === questionIndex
              );

              const answerSelected = selectedAnswers.some(
                (el) =>
                  el.questionIndex === questionIndex &&
                  el.answerIndex === answerIndex
              );

              const actualBackgroundColor = x.backgroundColor
                ? x.backgroundColor
                : generalBackgroundColor
                ? generalBackgroundColor
                : null;

              return (
                <div
                  className={`rbq_individual_answer_outer_container ${
                    resultsAvailable && "rbq_results_available"
                  } ${
                    item.answerArrangement === "row" &&
                    "rbq_answer_row_arrangement"
                  } ${questionAnswered && "rbq_question_answered"} ${
                    answerSelected && "rbq_answer_selected"
                  } ${x.backgroundImageSrc && "rbq_answer_background_image"}`}
                  key={answerIndex}
                  onMouseEnter={() => changeAnswerHovered(answerIndex)}
                  onMouseLeave={() => changeAnswerHovered(null)}
                  onClick={() =>
                    handleAnswerSelection(
                      questionIndex,
                      answerIndex,
                      x.resultID,
                      x.onAnswerSelection
                    )
                  }
                >
                  <div
                    className={`rbq_individual_answer_container ${
                      item.answerArrangement === "row" &&
                      "rbq_answer_row_arrangement"
                    } ${x.backgroundImageSrc && "rbq_answer_background_image"}
                      ${questionAnswered && "rbq_question_answered"} ${
                      answerSelected && "rbq_answer_selected"
                    } ${resultsAvailable && "rbq_results_available"}
                      ${
                        item.answers.length >= 9 ||
                        (item.answers.length % 3 === 0 &&
                          item.answers.length % 2 !== 0)
                          ? "rbq_answer_grid_layout"
                          : null
                      }
                    `}
                    style={{
                      background:
                        item.answerArrangement === "row"
                          ? questionAnswered
                            ? answerSelected
                              ? "#0f65ef"
                              : "#fff"
                            : "#fff"
                          : actualBackgroundColor
                          ? actualBackgroundColor
                          : x.backgroundImageSrc
                          ? "none"
                          : "#000",
                    }}
                  >
                    {x.backgroundImageSrc &&
                    item.answerArrangement !== "row" ? (
                      <img
                        className="rbq_answer_image"
                        src={x.backgroundImageSrc}
                        alt={`${x.answer} Answer Image`}
                      />
                    ) : null}

                    {x.backgroundImageSrc ? (
                      item.answerArrangement === "tile" ? null : (
                        <p className="rbq_answer_text">{x.answer}</p>
                      )
                    ) : (
                      <div
                        className={`rbq_text_fit ${
                          answerHovered === answerIndex && "rbq_text_hovered"
                        } ${resultsAvailable && "rbq_results_available"} ${
                          item.answerArrangement === "row" &&
                          "rbq_answer_row_arrangement"
                        } ${questionAnswered && "rbq_question_answered"} ${
                          answerSelected && "rbq_answer_selected"
                        }`}
                        style={{
                          color: x.fontColor
                            ? x.fontColor
                            : generalFontColor
                            ? generalFontColor
                            : "#fff",
                        }}
                      >
                        {/* <ScaleText> */}
                        <p
                          style={{
                            color:
                              item.answerArrangement === "row"
                                ? questionAnswered
                                  ? answerSelected
                                    ? "#fff"
                                    : "#000"
                                  : "#000"
                                : x.fontColor
                                ? x.fontColor
                                : "#fff",
                          }}
                        >
                          {x.answer}
                        </p>
                        {/* </ScaleText> */}
                      </div>
                    )}
                  </div>
                  {x.backgroundImageSrc && item.answerArrangement === "tile" ? (
                    <div
                      className={`rbq_answer_image_bottom_text_container ${
                        answerSelected && "rbq_selected_answer"
                      }`}
                    >
                      {x.answer && (
                        <p className="rbq_answer_image_text">{x.answer}</p>
                      )}
                      {x.imageAttribution && (
                        <p
                          className={`rbq_answer_image_attribution ${
                            questionAnswered && "rbq_question_answered"
                          } ${answerSelected && "rbq_answer_selected"}`}
                        >
                          {x.imageAttribution}
                        </p>
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null)}
    </ListItemContainerScrollElement>
  );
};

export default Question;
