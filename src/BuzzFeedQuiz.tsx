import { useState, useEffect, FC } from "react";
import { scroller, Element } from "react-scroll";
import Byline from "./components/Byline";
import Question from "./components/Question";
import Result from "./components/Result";
import BuzzFeedQuizProps from "./interfaces/BuzzFeedQuiz/buzzfeed_quiz.interface";
import ISelectedAnswer from "./interfaces/Answers/selected_answer.interface";
import ResultType from "./interfaces/Result/result.interface";
import "./main.scss";

const BuzzFeedQuiz: FC<BuzzFeedQuizProps> = (props) => {
  const {
    title,
    description,
    byline,
    bylineAuthor,
    bylineAuthorLink,
    bylineAuthorLinkOpenInNewTab,
    bylineAuthorTagline,
    bylineAvatarImageSrc,
    generalBackgroundColor,
    generalFontColor,
    autoScroll,
    questions,
    onResult,
    onAnswerSelection,
    onRestart,
    facebookShareButton,
    facebookShareLink,
    twitterShareButton,
    twitterShareLink,
    twitterShareText,
    twitterShareHashtags,
    copyShareButton,
    copyShareLink,
    results,
  } = props;

  const [selectedAnswers, changeSelectedAnswers] = useState<ISelectedAnswer[]>(
    []
  );
  const [resultsAvailable, changeResultsAvailable] = useState(false);
  const [finalResult, changeFinalResult] = useState<ResultType[]>([]);
  const [shareLinkClicked, changeShareLinkClicked] = useState(false);
  const [shareLinkAnimatingOut, changeShareLinkAnimatingOut] = useState(false);

  const scrollFunction = (element: string, questionIndex: number) => {
    if (autoScroll) {
      if (questionIndex + 1 === questions.length) {
        setTimeout(() => {
          scroller.scrollTo("Result", {
            duration: 500,
            offset: -80,
            smooth: true,
            container: "main_questions_container",
          });
        }, 200);
      } else {
        scroller.scrollTo(element, {
          duration: 500,
          offset: -150,
          smooth: true,
          container: "main_questions_container",
        });
      }
    }
  };

  useEffect(() => {
    if (
      selectedAnswers.length > 0 &&
      selectedAnswers.length === questions.length
    ) {
      const allAnswers = selectedAnswers.map((answer) => answer.resultID);
      const answerFreq: { [key: string]: number } = {};

      for (let i = 0; i < allAnswers.length; i++) {
        if (answerFreq[allAnswers[i]]) {
          answerFreq[allAnswers[i]]++;
        } else {
          answerFreq[allAnswers[i]] = 1;
        }
      }

      const greatestValue = Math.max(...Object.values(answerFreq));

      const mostFrequentResultID = Object.keys(answerFreq).find(
        (key) => answerFreq[key] === greatestValue
      );

      if (!resultsAvailable) {
        changeResultsAvailable(true);
        changeFinalResult(
          results.filter(
            (result) => Number(result.resultID) === Number(mostFrequentResultID)
          )
        );
      }
    }
  }, [selectedAnswers, questions, resultsAvailable, results]);

  useEffect(() => {
    if (shareLinkClicked) {
      setTimeout(() => {
        changeShareLinkAnimatingOut(true);
      }, 4500);

      setTimeout(() => {
        changeShareLinkClicked(false);
        changeShareLinkAnimatingOut(false);
      }, 4800);
    }
  }, [shareLinkClicked]);

  return (
    <>
      <Element name="Top" className="rbq_outer_quiz_container">
        <div className="rbq_inner_quiz_container">
          {title ? <h1 className="rbq_quiz_title">{title}</h1> : null}
          {description ? (
            <p className="rbq_quiz_description">{description}</p>
          ) : null}
          <Byline
            byline={byline}
            bylineAuthor={bylineAuthor}
            bylineAvatarImageSrc={bylineAvatarImageSrc}
            bylineAuthorLink={bylineAuthorLink}
            bylineAuthorTagline={bylineAuthorTagline}
            bylineAuthorLinkOpenInNewTab={bylineAuthorLinkOpenInNewTab}
          />

          {questions ? (
            Array.isArray(questions) && questions.length > 0 ? (
              <>
                <ol
                  id="main_questions_container"
                  className="rbq_question_list_container"
                >
                  {questions.map((item, questionIndex) => {
                    return (
                      <Question
                        key={questionIndex}
                        item={item}
                        questionIndex={questionIndex}
                        generalBackgroundColor={generalBackgroundColor}
                        generalFontColor={generalFontColor}
                        resultsAvailable={resultsAvailable}
                        selectedAnswers={selectedAnswers}
                        changeSelectedAnswers={changeSelectedAnswers}
                        scrollFunction={scrollFunction}
                        onAnswerSelection={onAnswerSelection}
                      />
                    );
                  })}
                </ol>
                <Result
                  title={title}
                  resultsAvailable={resultsAvailable}
                  finalResult={finalResult}
                  facebookShareButton={facebookShareButton}
                  facebookShareLink={facebookShareLink}
                  twitterShareButton={twitterShareButton}
                  twitterShareLink={twitterShareLink}
                  twitterShareText={twitterShareText}
                  twitterShareHashtags={twitterShareHashtags}
                  copyShareButton={copyShareButton}
                  copyShareLink={copyShareLink}
                  shareLinkClicked={shareLinkClicked}
                  changeShareLinkClicked={changeShareLinkClicked}
                  shareLinkAnimatingOut={shareLinkAnimatingOut}
                  changeShareLinkAnimatingOut={changeShareLinkAnimatingOut}
                  scrollFunction={scrollFunction}
                  changeResultsAvailable={changeResultsAvailable}
                  changeSelectedAnswers={changeSelectedAnswers}
                  changeFinalResult={changeFinalResult}
                  onResult={onResult}
                  onRestart={onRestart}
                />
              </>
            ) : null
          ) : null}
        </div>
      </Element>
    </>
  );
};

BuzzFeedQuiz.defaultProps = {
  title: "",
  description: "",
  byline: true,
  bylineAuthor: "",
  bylineAuthorLink: "",
  bylineAuthorLinkOpenInNewTab: false,
  bylineAuthorTagline: "",
  bylineAvatarImageSrc: "",
  generalBackgroundColor: "",
  generalFontColor: "",
  autoScroll: true,
  facebookShareButton: true,
  facebookShareLink: "",
  twitterShareButton: true,
  twitterShareLink: "",
  twitterShareText: "",
  twitterShareHashtags: [],
  copyShareButton: true,
  copyShareLink: "",
  onResult: () => {},
  onAnswerSelection: () => {},
  onRestart: () => {},
  questions: [],
  results: [],
};

export default BuzzFeedQuiz;
