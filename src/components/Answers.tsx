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
  changeSelectedAnswerResponse,
}) => {
  const { selectedAnswers, changeSelectedAnswers, scrollFunction } =
    useContext(QuizContext);

  const { width: answerWidth, ref } = useResizeDetector();

  const handleAnswerSelection = (
    questionIndex: number,
    answerIndex: number,
    resultID: number,
    showResponse: boolean,
    specificHandleAnswerSelection?: (
      questionIndex: number,
      answerIndex: number,
      resultID: number
    ) => void
  ) => {
    const handleGeneralAnswerSelection = () => {
      if (onAnswerSelection) {
        if (typeof onAnswerSelection === "function") {
          onAnswerSelection(questionIndex, answerIndex, resultID);
        }
      }
    };

    if (specificHandleAnswerSelection) {
      if (typeof specificHandleAnswerSelection === "function") {
        specificHandleAnswerSelection(questionIndex, answerIndex, resultID);
      } else {
        handleGeneralAnswerSelection();
      }
    } else {
      handleGeneralAnswerSelection();
    }

    const handleScrollLogic = () => {
      if (showResponse) {
        scrollFunction(`RBQQuestionResponse${questionIndex}`, questionIndex);
      } else {
        scrollFunction(`Question${questionIndex + 1}`, questionIndex);
      }
    };

    if (selectedAnswers.some((item) => item.questionIndex === questionIndex)) {
      const arrCopy = selectedAnswers.slice();

      arrCopy.splice(
        arrCopy.findIndex((item) => item.questionIndex === questionIndex),
        1,
        { questionIndex, answerIndex, resultID }
      );

      changeSelectedAnswers(arrCopy);

      handleScrollLogic();
    } else {
      changeSelectedAnswers([
        ...selectedAnswers,
        { questionIndex, answerIndex, resultID },
      ]);
      handleScrollLogic();
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
      {item.answers.map((answerEl, answerIndex) => {
        const questionAnswered = selectedAnswers.some(
          (el) => el.questionIndex === questionIndex
        );

        const answerSelected = selectedAnswers.some(
          (el) =>
            el.questionIndex === questionIndex && el.answerIndex === answerIndex
        );

        const actualBackgroundColor = answerEl.backgroundColor
          ? answerEl.backgroundColor
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
            } ${
              answerEl.backgroundImageSrc ? "rbq_answer_background_image" : ""
            }`}
            key={answerIndex}
            onClick={() => {
              changeSelectedAnswerResponse({
                title: "",
                description: "",
                image: "",
                imageAttribution: "",
              });
              const revealRes = answerEl.revealResponse;
              let showResponse = false;

              if (
                revealRes &&
                (revealRes.title ||
                  revealRes.description ||
                  revealRes.image ||
                  revealRes.imageAttribution)
              ) {
                showResponse = true;
                changeSelectedAnswerResponse(revealRes);
              }

              handleAnswerSelection(
                questionIndex,
                answerIndex,
                answerEl.resultID,
                showResponse,
                answerEl.onAnswerSelection
              );
            }}
            ref={ref}
          >
            <div
              className={`rbq_individual_answer_container ${
                item.answerArrangement === "row"
                  ? "rbq_answer_row_arrangement"
                  : ""
              } ${
                answerEl.backgroundImageSrc ? "rbq_answer_background_image" : ""
              }
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
                    : answerEl.backgroundImageSrc
                    ? "none"
                    : "#000",
              }}
            >
              {answerEl.backgroundImageSrc &&
              item.answerArrangement !== "row" ? (
                <img
                  className="rbq_answer_image"
                  src={answerEl.backgroundImageSrc}
                  alt={`${answerEl.answer} answer image`}
                />
              ) : null}

              {item.answerArrangement === "row" ? (
                <p className="rbq_answer_text">{answerEl.answer}</p>
              ) : answerEl.backgroundImageSrc ? null : (
                <div
                  className={`rbq_text_fit ${
                    resultsAvailable ? "rbq_results_available" : ""
                  } ${questionAnswered ? "rbq_question_answered" : ""} ${
                    answerSelected ? "rbq_answer_selected" : ""
                  }`}
                  style={{
                    color: answerEl.fontColor
                      ? answerEl.fontColor
                      : generalFontColor
                      ? generalFontColor
                      : "#fff",
                  }}
                >
                  <TextFit
                    className="rbq_answer_text"
                    min={15}
                    max={gridLayout ? 54 : 60}
                    capAt={gridLayout ? 35 : 46}
                    style={{
                      color: answerEl.fontColor ? answerEl.fontColor : "#fff",
                    }}
                    outerContainerWidth={answerWidth}
                    gridLayout={gridLayout}
                  >
                    {answerEl.answer}
                  </TextFit>
                </div>
              )}
            </div>
            {answerEl.backgroundImageSrc &&
            item.answerArrangement === "tile" ? (
              <div className="rbq_answer_image_bottom_text_container">
                {answerEl.answer && (
                  <p className="rbq_answer_image_text">{answerEl.answer}</p>
                )}
                {answerEl.imageAttribution && (
                  <p
                    className={`rbq_answer_image_attribution ${
                      questionAnswered ? "rbq_question_answered" : ""
                    } ${answerSelected ? "rbq_answer_selected" : ""}`}
                  >
                    {answerEl.imageAttribution}
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
