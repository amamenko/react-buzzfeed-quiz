import { FC, useRef } from "react";
import { ScrollElement } from "react-scroll";
import QuestionType from "../interfaces/Question/question.interface";
import QuestionProps from "../interfaces/Question/question_props.interface";
import ListItemContainerElementProps from "../interfaces/Question/list_item.interface";
import Answers from "./Answers";

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

  let listItemContainerRef = useRef(null);

  const ListItemContainerElement: FC<ListItemContainerElementProps> = (
    elProps
  ) => {
    const customAttr = { name: elProps.name };

    return (
      <li
        {...customAttr}
        className={elProps.className}
        ref={listItemContainerRef}
      >
        {elProps.children}
      </li>
    );
  };

  const ListItemContainerScrollElement = ScrollElement(
    ListItemContainerElement
  );

  return (
    <ListItemContainerScrollElement
      className={`rbq_list_item_container rbq_question ${
        questionIndex === 0 ? "rbq_first_question" : ""
      }`}
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
            item.questionRelativeToImage === "adjacent"
              ? "rbq_question_adjacent_to_image"
              : ""
          } ${item.imageAttribution ? "rbq_image_attribution" : ""}`}
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
            item.questionRelativeToImage === "adjacent"
              ? "rbq_question_adjacent_to_image"
              : ""
          }`}
          style={{
            background: item.backgroundColor
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
