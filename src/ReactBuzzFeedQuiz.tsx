import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import Byline from "./components/Byline";
import Question from "./components/Question";
import Result from "./components/Result";
import {
  ISelectedAnswer,
  ReactBuzzFeedQuizProps,
  ResultType,
} from "./interfaces";

const StyledOuterQuizContainer = styled.div`
  font-family: "Proxima Nova";
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const StyledInnerQuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  margin-bottom: 3rem;
`;

const StyledQuizTitle = styled.h1`
  font-size: 1.625rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
  @media (min-width: 40rem) {
    font-size: 2.5rem;
    line-height: 1.025;
    line-height: 1.05;
  }
`;

const StyledQuizDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.2;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
`;

const StyledQuestionListContainer = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ReactBuzzFeedQuiz: FC<ReactBuzzFeedQuizProps> = (props) => {
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
      <StyledOuterQuizContainer name="Top" className="react_buzzfeed_quiz">
        <StyledInnerQuizContainer className="rbq_inner_container">
          {title ? (
            <StyledQuizTitle className="rbq_title">{title}</StyledQuizTitle>
          ) : null}
          {description ? (
            <StyledQuizDescription className="rbq_description">
              {description}
            </StyledQuizDescription>
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
                <StyledQuestionListContainer
                  id="main_questions_container"
                  className="rbq_questions_container"
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
                </StyledQuestionListContainer>
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
        </StyledInnerQuizContainer>
      </StyledOuterQuizContainer>
    </>
  );
};

ReactBuzzFeedQuiz.defaultProps = {
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

export default ReactBuzzFeedQuiz;