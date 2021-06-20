import { FC, useContext } from "react";
import AnswersProps from "../interfaces/Answers/answers_props.interface";
import { useResizeDetector } from "react-resize-detector";
import TextFit from "../TextFit";
import { QuizContext } from "../BuzzFeedQuiz";

const Answers: FC<AnswersProps> = ({
  item,
  questionIndex,
  resultsAvailable,
  generalBackgroundColor,
  generalFontColor,
  onAnswerSelection,
}) => {
  const { selectedAnswers, changeSelectedAnswers, scrollFunction } =
    useContext(QuizContext);

  const { width: answerWidth, ref } = useResizeDetector();

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

  const gridLayout =
    item.answers.length >= 9 ||
    (item.answers.length % 3 === 0 && item.answers.length % 2 !== 0);

  return (
    <div
      className={`rbq_answers_container ${
        item.answerArrangement === "row" ? "rbq_answer_row_arrangement" : ""
      } ${
        item.answers.some((answer) => answer.backgroundImageSrc)
          ? "rbq_answers_contain_images"
          : ""
      } ${item.answers.length >= 9 ? "rbq_more_than_9_answers" : ""} ${
        item.answers.length === 3 ? "rbq_3_answers" : ""
      } ${gridLayout ? "rbq_answer_grid_layout" : ""}`}
    >
      {item.answers.map((x, answerIndex) => {
        const questionAnswered = selectedAnswers.some(
          (el) => el.questionIndex === questionIndex
        );

        const answerSelected = selectedAnswers.some(
          (el) =>
            el.questionIndex === questionIndex && el.answerIndex === answerIndex
        );

        const actualBackgroundColor = x.backgroundColor
          ? x.backgroundColor
          : generalBackgroundColor
          ? generalBackgroundColor
          : null;

        return (
          <div
            className={`rbq_individual_answer_outer_container ${
              resultsAvailable ? "rbq_results_available" : ""
            } ${
              item.answerArrangement === "row"
                ? "rbq_answer_row_arrangement"
                : ""
            } ${questionAnswered ? "rbq_question_answered" : ""} ${
              answerSelected ? "rbq_answer_selected" : ""
            } ${x.backgroundImageSrc ? "rbq_answer_background_image" : ""}`}
            key={answerIndex}
            onClick={() =>
              handleAnswerSelection(
                questionIndex,
                answerIndex,
                x.resultID,
                x.onAnswerSelection
              )
            }
            ref={ref}
          >
            <div
              className={`rbq_individual_answer_container ${
                item.answerArrangement === "row"
                  ? "rbq_answer_row_arrangement"
                  : ""
              } ${x.backgroundImageSrc ? "rbq_answer_background_image" : ""}
                      ${questionAnswered ? "rbq_question_answered" : ""} ${
                answerSelected ? "rbq_answer_selected" : ""
              } ${resultsAvailable ? "rbq_results_available" : ""} ${
                gridLayout ? "rbq_answer_grid_layout" : ""
              }`}
              style={{
                background:
                  item.answerArrangement === "row"
                    ? "#fff"
                    : actualBackgroundColor
                    ? actualBackgroundColor
                    : x.backgroundImageSrc
                    ? "none"
                    : "#000",
              }}
            >
              {x.backgroundImageSrc && item.answerArrangement !== "row" ? (
                <img
                  className="rbq_answer_image"
                  src={x.backgroundImageSrc}
                  alt={`${x.answer} answer image`}
                />
              ) : null}

              {item.answerArrangement === "row" ? (
                <p className="rbq_answer_text">{x.answer}</p>
              ) : x.backgroundImageSrc ? null : (
                <div
                  className={`rbq_text_fit ${
                    resultsAvailable ? "rbq_results_available" : ""
                  } ${questionAnswered ? "rbq_question_answered" : ""} ${
                    answerSelected ? "rbq_answer_selected" : ""
                  }`}
                  style={{
                    color: x.fontColor
                      ? x.fontColor
                      : generalFontColor
                      ? generalFontColor
                      : "#fff",
                  }}
                >
                  <TextFit
                    className="rbq_answer_text"
                    min={20}
                    max={gridLayout ? 54 : 60}
                    capAt={gridLayout ? 35 : 46}
                    style={{
                      color: x.fontColor ? x.fontColor : "#fff",
                    }}
                    outerContainerWidth={answerWidth}
                    gridLayout={gridLayout}
                  >
                    {x.answer}
                  </TextFit>
                </div>
              )}
            </div>
            {x.backgroundImageSrc && item.answerArrangement === "tile" ? (
              <div className="rbq_answer_image_bottom_text_container">
                {x.answer && (
                  <p className="rbq_answer_image_text">{x.answer}</p>
                )}
                {x.imageAttribution && (
                  <p
                    className={`rbq_answer_image_attribution ${
                      questionAnswered ? "rbq_question_answered" : ""
                    } ${answerSelected ? "rbq_answer_selected" : ""}`}
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
  );
};

export default Answers;
