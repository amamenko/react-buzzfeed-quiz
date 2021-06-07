import React, { useEffect, useState, FC, useRef } from "react";
import { ScrollElement } from "react-scroll";
import {
  QuestionType,
  ListItemContainerElementProps,
  QuestionProps,
} from "../../interfaces";
import Answers from "../Answers/Answers";

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
      {item.questionRelativeToImage === "adjacent" && (
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
      )}
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
          <Answers
            item={item}
            selectedAnswers={selectedAnswers}
            changeSelectedAnswers={changeSelectedAnswers}
            answerHovered={answerHovered}
            changeAnswerHovered={changeAnswerHovered}
            questionIndex={questionIndex}
            resultsAvailable={resultsAvailable}
            onAnswerSelection={onAnswerSelection}
            scrollFunction={scrollFunction}
            generalBackgroundColor={generalBackgroundColor}
            generalFontColor={generalFontColor}
          />
        ) : null)}
    </ListItemContainerScrollElement>
  );
};

export default Question;
