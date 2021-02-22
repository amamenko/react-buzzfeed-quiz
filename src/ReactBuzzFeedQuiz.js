import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrRefresh, GrFacebook, GrTwitter } from "react-icons/gr";
import { IoIosLink, IoIosCheckmarkCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { quizValidatorFunction } from "./quizValidatorFunction";

const StyledOuterQuizContainer = styled.div`
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

const StyledBylineContainer = styled.div`
  display: flex;
  margin: 0.5rem 0 1.5rem;
  @media (min-width: 40rem) {
    margin-bottom: 1.5rem;
  }
`;

const StyledAvatarContainer = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 0.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(211, 211, 211);
  padding: 0;
  font-size: 1rem;
  color: rgb(90, 90, 90);
  @media (min-width: 40rem) {
    height: 56px;
    width: 56px;
    font-size: 1.5rem;
  }
`;

const StyledAvatar = styled.img`
  object-fit: cover;
  height: 40px;
  width: 40px;
  @media (min-width: 40rem) {
    height: 56px;
    width: 56px;
  }
`;

const StyledBylineAuthorDescriptorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const StyledBylineAuthorDescriptor = styled.p`
  font-size: 0.875rem;
  line-height: 1.21;
  margin: 0;
  padding: 0;

  a {
    color: #000;

    &:hover {
      color: #0f65ef;
    }
  }
`;

const StyledQuestionListContainer = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

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
    props.theme === "red"
      ? "rgb(238, 50, 34)"
      : props.theme === "pink"
      ? "rgb(228, 12, 120)"
      : props.theme === "purple"
      ? "rgb(103, 68, 221)"
      : props.theme === "blue"
      ? "rgb(15, 101, 238)"
      : props.theme === "darkGreen"
      ? "rgb(3, 124, 124)"
      : props.theme === "lightGreen"
      ? "rgb(104, 175, 19)"
      : props.theme === "darkGray"
      ? "rgb(34, 34, 34)"
      : "rgb(0, 0, 0)"};
  margin-bottom: 2.5rem;
  @media (min-width: 52rem) {
    min-height: 345px;
  }
`;

const StyledQuestionText = styled.p`
  z-index: 3;
  margin: 0;
  line-height: 1.1;
  padding: 10px;
  font-weight: 900;
  font-size: calc(90px / 2);
  color: ${(props) =>
    props.theme === "red"
      ? "rgb(251, 158, 149)"
      : props.theme === "pink"
      ? "rgb(133, 33, 78)"
      : props.theme === "purple"
      ? "rgb(179, 161, 239)"
      : props.theme === "blue"
      ? "rgb(143, 178, 247)"
      : props.theme === "darkGreen"
      ? "rgb(145, 189, 189)"
      : props.theme === "lightGreen"
      ? "rgb(70, 105, 34)"
      : props.theme === "darkGray"
      ? "rgb(144, 144, 144)"
      : "rgb(255, 255, 255)"};
  @media (min-width: 52rem) {
    font-size: 90px;
    transform: scale(0.8);
  }
`;

const StyledQuestionAnswersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem 0.5rem;
`;

const StyledIndividualAnswerContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  opacity: ${(props) => (props.answered ? (props.selected ? 1 : 0.6) : 1)};
  transition: opacity 0.5s ease;
  pointer-events: ${(props) => (props.resultsAvailable ? "none" : "auto")};
  background-color: ${(props) =>
    props.theme === "red"
      ? "rgb(238, 50, 34)"
      : props.theme === "pink"
      ? "rgb(228, 12, 120)"
      : props.theme === "purple"
      ? "rgb(103, 68, 221)"
      : props.theme === "blue"
      ? "rgb(15, 101, 238)"
      : props.theme === "darkGreen"
      ? "rgb(3, 124, 124)"
      : props.theme === "lightGreen"
      ? "rgb(104, 175, 19)"
      : props.theme === "darkGray"
      ? "rgb(34, 34, 34)"
      : "rgb(0, 0, 0)"};
  font-weight: 900;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14.5vh;

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

  @media (min-width: 40rem) {
    height: 208.73px;
  }

  @media (min-width: 52rem) {
    height: 204.83px;
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
        transform: scale(0.89);
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
    color: ${(props) =>
      props.theme === "red"
        ? "rgb(251, 158, 149)"
        : props.theme === "pink"
        ? "rgb(133, 33, 78)"
        : props.theme === "purple"
        ? "rgb(179, 161, 239)"
        : props.theme === "blue"
        ? "rgb(143, 178, 247)"
        : props.theme === "darkGreen"
        ? "rgb(145, 189, 189)"
        : props.theme === "lightGreen"
        ? "rgb(70, 105, 34)"
        : props.theme === "darkGray"
        ? "rgb(144, 144, 144)"
        : "rgb(255, 255, 255)"};
    font-size: calc(50px / 2);
    @media (min-width: 52rem) {
      font-size: 60px;
      transform: scale(0.8);
    }
  }
`;

const StyledResultOuterContainer = styled.div`
  background-image: linear-gradient(43deg, #e40c78 0%, #e32 100%);
  border-radius: 3px;
  padding: 0 1rem 1rem 1rem;
`;

const StyledResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    padding-top: 2px;
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: center;

    @media (min-width: 40rem) {
      font-size: 1.375rem;
      line-height: 1.27;
      text-align: left;
      margin-right: 1.5rem;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 0;
    margin-top: 0;
    color: #fff;
    font-weight: 600;
    display: none;

    @media (min-width: 40rem) {
      display: inline-block;
    }
  }
`;

const StyledResultInnerContainer = styled.div`
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 40rem) {
    flex-direction: row;
  }
`;

const StyledResultInnerDescriptionContainer = styled.div`
  padding: 1rem;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  border-radius: 0;
`;

const StyledResultInnerDescriptionHeader = styled.h3`
  font-weight: 700;
  margin-bottom: 0.25em;
  font-size: 1rem;

  @media (min-width: 40rem) {
    font-size: 1.125rem;
    line-height: 1.2;
  }
`;

const StyledResultInnerDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.5;
`;

const StyledResultInnerImageContainer = styled.div`
  max-width: 100%;
  border-radius: 0;

  @media (min-width: 40rem) {
    min-height: 20rem;
    flex: 1 1 auto;
    max-width: 50%;
  }
`;

const StyledResultInnerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledRetakeQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  cursor: pointer;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    vertical-align: middle;
    margin-right: 0.5rem;

    path {
      stroke: #fff;
    }
  }

  p {
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.3;
    font-weight: 700;
  }

  @media (max-width: 40rem) {
    display: none;
  }
`;

const StyledMobileRetakeQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  line-height: 0;
  cursor: pointer;

  svg {
    width: 1.125rem;
    height: 1.125rem;

    path {
      stroke: #fff;
    }
  }

  p {
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.3;
    margin: 0;
    padding-left: 0.5rem;
    font-weight: 700;
  }

  @media (min-width: 40rem) {
    display: none;
  }
`;

const StyledShareLinksList = styled.div`
  padding-left: 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  display: none;

  a {
    text-decoration: none;
  }

  @media (min-width: 40rem) {
    display: flex;
    flex-direction: row;
    align: center;
    justify-content: flex-start;
  }
`;

const StyledMobileShareLinksList = styled.div`
  padding-left: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;

  a {
    text-decoration: none;
  }

  @media (min-width: 40rem) {
    display: none;
  }
`;

const StyledShareButton = styled.span`
  background-color: ${(props) =>
    props.shareTo === "facebook"
      ? "#3b5998"
      : props.shareTo === "twitter"
      ? "#55acee"
      : "#0f65ef"};
  border: ${(props) =>
    props.shareTo === "facebook"
      ? "1px solid #3b5998"
      : props.shareTo === "twitter"
      ? "1px solid #55acee"
      : "1px solid #0f65ef"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 0.875rem;
  margin-right: 0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  font-size: 0.875rem;
  min-width: 4rem;
  width: ${(props) => (props.shareTo === "link" ? "100%" : "auto")};
  max-height: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: background-color 0.1s ease, border 0.1s ease;

  @media (min-width: 40rem) {
    padding: 0.2rem 0.625rem;
    line-height: 1.25rem;
    margin-bottom: 0;
    width: auto;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.7rem;
    position: relative;
    position: relative;

    @media (min-width: 40rem) {
      top: auto;
      width: 0.875rem;
      height: 0.875rem;
      margin-right: 0.3125rem;
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.shareTo === "facebook"
        ? "#2d4373"
        : props.shareTo === "twitter"
        ? "#2795e9"
        : "#0c51bf"};
    border: ${(props) =>
      props.shareTo === "facebook"
        ? "1px solid #2d4373"
        : props.shareTo === "twitter"
        ? "1px solid #2795e9"
        : "1px solid #0c51bf"};
  }
`;

const StyledShareLinkButtonOuterContainer = styled.div`
  position: relative;

  @media (max-width: 40rem) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTooltipContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #222;
  max-width: 100%;
  max-height: 1.5rem;
  bottom: 0;
  white-space: nowrap;
  border: 1px solid #222;
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  border-radius: 3px;
  margin-bottom: 61px;
  padding: 0.5rem 0.8rem;
  line-height: 1.5rem;
  min-width: 4rem;
  transform: translate(-2%, 0%);

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  animation: ${(props) =>
    props.shareLinkAnimatingOut === true
      ? "fadeout 0.5s ease"
      : "fadein 0.2s ease"};

  @media (min-width: 40rem) {
    padding: 0.4rem 0.625rem;
    margin-bottom: 45px;
  }

  svg {
    padding-right: 0.25rem;
  }

  p {
    font-size: 0.8rem;
    padding-left: 0.25rem;
  }

  &::after {
    content: "";
    border-top-color: #222;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -0.5875rem;
    border-width: 0.5875rem;
    border-style: solid;
    border-color: #222 transparent transparent transparent;
  }
`;

const ReactBuzzFeedQuiz = (props) => {
  const {
    title,
    description,
    byline,
    bylineAuthor,
    bylineAuthorLink,
    bylineAuthorLinkOpenInNewTab,
    bylineAuthorTagline,
    bylineAvatarImageSrc,
    generalTheme,
    autoScroll,
    questions,
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

  const [selectedAnswers, changeSelectedAnswers] = useState([]);
  const [resultsAvailable, changeResultsAvailable] = useState(false);
  const [finalResult, changeFinalResult] = useState([]);
  const [shareLinkClicked, changeShareLinkClicked] = useState(false);
  const [shareLinkAnimatingOut, changeShareLinkAnimatingOut] = useState(false);

  const scrollFunction = (element, questionIndex) => {
    if (autoScroll) {
      if (questionIndex + 1 === questions.length) {
        setTimeout(() => {
          scroller.scrollTo("Result", {
            duration: 500,
            smooth: true,
            container: "main_questions_container",
          });
        }, 200);
      } else {
        scroller.scrollTo(element, {
          duration: 500,
          smooth: true,
          container: "main_questions_container",
        });
      }
    }
  };

  const handleAnswerSelection = (questionIndex, answerIndex, resultID) => {
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

  useEffect(() => {
    if (
      selectedAnswers.length > 0 &&
      selectedAnswers.length === questions.length
    ) {
      const allAnswers = selectedAnswers.map((answer) => answer.resultID);
      const answerFreq = {};

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
  }, [selectedAnswers, questions, resultsAvailable]);

  const handleRetakeQuiz = () => {
    scrollFunction("Top");
    changeResultsAvailable(false);
    changeSelectedAnswers([]);
    changeFinalResult([]);

    if (shareLinkClicked) {
      changeShareLinkClicked(false);
    }

    if (shareLinkAnimatingOut) {
      changeShareLinkAnimatingOut(false);
    }
  };

  const handleShareLinkClicked = (shareLink) => {
    // Handle copy to clipboard
    const el = document.createElement("textarea");
    el.value = shareLink;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      var editable = el.contentEditable;
      var readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = true;
      el.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      el.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      el.contentEditable = editable;
      el.readOnly = readOnly;
    } else {
      el.select();
    }

    document.execCommand("copy");
    document.body.removeChild(el);

    if (!shareLinkClicked) {
      changeShareLinkClicked(true);
    }
  };

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

  if (!quizValidatorFunction(props)) {
    return null;
  }

  return (
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
        {byline ? (
          <StyledBylineContainer className="rbq_byline_container">
            {bylineAuthor ? (
              <StyledAvatarContainer className="rbq_byline_avatar_container">
                {bylineAvatarImageSrc ? (
                  <StyledAvatar
                    className="rbq_byline_avatar"
                    alt={bylineAuthor}
                    src={bylineAvatarImageSrc}
                  />
                ) : (
                  <FaUser className="rbq_byline_avatar_icon" />
                )}
              </StyledAvatarContainer>
            ) : null}
            <StyledBylineAuthorDescriptorContainer className="rbq_byline_descriptor_container">
              {bylineAuthor ? (
                <StyledBylineAuthorDescriptor className="rbq_byline_author">
                  by{" "}
                  {bylineAuthorLink ? (
                    <a
                      href={bylineAuthorLink}
                      target={bylineAuthorLinkOpenInNewTab ? "_blank" : "_self"}
                      rel={
                        bylineAuthorLinkOpenInNewTab
                          ? "noopener noreferrer"
                          : null
                      }
                    >
                      <strong>{bylineAuthor}</strong>
                    </a>
                  ) : (
                    <strong>{bylineAuthor}</strong>
                  )}
                </StyledBylineAuthorDescriptor>
              ) : null}
              {bylineAuthor && bylineAuthorTagline ? (
                <StyledBylineAuthorDescriptor className="rbq_byline_tagline">
                  {bylineAuthorTagline}
                </StyledBylineAuthorDescriptor>
              ) : null}
            </StyledBylineAuthorDescriptorContainer>
          </StyledBylineContainer>
        ) : null}

        {questions ? (
          Array.isArray(questions) && questions.length > 0 ? (
            <>
              <StyledQuestionListContainer
                id="main_questions_container"
                className="rbq_questions_container"
              >
                {questions.map((item, questionIndex) => {
                  return (
                    <StyledListItemContainer
                      className="rbq_question"
                      key={questionIndex}
                      questionIndex={questionIndex}
                      name={`Question${questionIndex}`}
                    >
                      <StyledQuestionContainer
                        className="rbq_question_inner_container"
                        theme={
                          item.specificTheme
                            ? item.specificTheme
                            : generalTheme
                            ? generalTheme
                            : null
                        }
                      >
                        <StyledQuestionText
                          className="rbq_question_text"
                          theme={
                            item.specificTheme
                              ? item.specificTheme
                              : generalTheme
                              ? generalTheme
                              : null
                          }
                        >
                          {item.question ? item.question : null}
                        </StyledQuestionText>
                      </StyledQuestionContainer>

                      {item.answers ? (
                        Array.isArray(item.answers) &&
                        item.answers.length > 0 ? (
                          <StyledQuestionAnswersContainer className="rbq_answers_container">
                            {item.answers.map((x, answerIndex) => {
                              return (
                                <StyledIndividualAnswerContainer
                                  className="rbq_answer"
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
                                  theme={
                                    x.specificTheme
                                      ? x.specificTheme
                                      : generalTheme
                                      ? generalTheme
                                      : null
                                  }
                                  onClick={() =>
                                    handleAnswerSelection(
                                      questionIndex,
                                      answerIndex,
                                      x.resultID
                                    )
                                  }
                                >
                                  <p>{x.answer}</p>
                                </StyledIndividualAnswerContainer>
                              );
                            })}
                          </StyledQuestionAnswersContainer>
                        ) : null
                      ) : null}
                    </StyledListItemContainer>
                  );
                })}
              </StyledQuestionListContainer>
              {resultsAvailable && finalResult.length > 0 ? (
                <StyledResultOuterContainer
                  className="rbq_result"
                  name="Result"
                >
                  <StyledResultHeader className="rbq_result_header">
                    <h2>{title}</h2>
                    <StyledRetakeQuizContainer
                      className="rbq_retake_container"
                      onClick={handleRetakeQuiz}
                    >
                      <GrRefresh className="rbq_retake_icon" />
                      <p>Retake Quiz</p>
                    </StyledRetakeQuizContainer>
                  </StyledResultHeader>
                  <StyledResultInnerContainer className="rbq_result_inner_container">
                    <StyledResultInnerDescriptionContainer className="rbq_result_description_container">
                      <StyledResultInnerDescriptionHeader className="rbq_result_description_header">
                        You got: {finalResult[0].title}
                      </StyledResultInnerDescriptionHeader>
                      <StyledResultInnerDescription className="rbq_result_description_body">
                        {finalResult[0].description}
                      </StyledResultInnerDescription>
                      <StyledShareLinksList className="rbq_share_links_container">
                        {facebookShareButton ? (
                          <a
                            href={
                              facebookShareLink
                                ? `https://www.facebook.com/sharer.php?u=${encodeURI(
                                    facebookShareLink
                                  )}`
                                : ""
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <StyledShareButton
                              className="rbq_facebook_share_button"
                              shareTo="facebook"
                            >
                              <GrFacebook className="rbq_facebook_share_button_icon" />
                              <p>Share</p>
                            </StyledShareButton>
                          </a>
                        ) : null}
                        {twitterShareButton ? (
                          <a
                            href={
                              twitterShareLink
                                ? `https://twitter.com/intent/tweet?url=${encodeURI(
                                    twitterShareLink
                                  )}${
                                    twitterShareText
                                      ? `&text=${encodeURIComponent(
                                          twitterShareText
                                        )}`
                                      : ""
                                  }${
                                    twitterShareHashtags
                                      ? twitterShareHashtags.length > 0
                                        ? `&hashtags=${twitterShareHashtags
                                            .map((item) =>
                                              encodeURIComponent(item)
                                            )
                                            .join()}`
                                        : ""
                                      : ""
                                  }`
                                : ""
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <StyledShareButton
                              className="rbq_twitter_share_button"
                              shareTo="twitter"
                            >
                              <GrTwitter className="rbq_twitter_share_button_icon" />
                              <p>Tweet</p>
                            </StyledShareButton>
                          </a>
                        ) : null}
                        {copyShareButton ? (
                          <StyledShareLinkButtonOuterContainer>
                            {shareLinkClicked ? (
                              <StyledTooltipContainer
                                shareLinkAnimatingOut={shareLinkAnimatingOut}
                                className="rbq_link_share_copied_tooltip"
                              >
                                <IoIosCheckmarkCircle />
                                <p>Link copied!</p>
                              </StyledTooltipContainer>
                            ) : null}
                            <StyledShareButton
                              className="rbq_link_share_button"
                              shareTo="link"
                              onClick={() =>
                                handleShareLinkClicked(copyShareLink)
                              }
                            >
                              <IoIosLink className="rbq_link_share_button_icon" />
                              <p>Copy Link</p>
                            </StyledShareButton>
                          </StyledShareLinkButtonOuterContainer>
                        ) : null}
                      </StyledShareLinksList>
                    </StyledResultInnerDescriptionContainer>
                    <StyledResultInnerImageContainer className="rbq_result_inner_image_container">
                      <StyledResultInnerImage
                        className="rbq_result_inner_image"
                        alt="Buzzfeed Quiz Result Image"
                        src={finalResult[0].resultImageSrc}
                      />
                    </StyledResultInnerImageContainer>
                    <StyledMobileShareLinksList className="rbq_mobile_share_links_container">
                      {facebookShareButton ? (
                        <a
                          href={
                            facebookShareLink
                              ? `https://www.facebook.com/sharer.php?u=${encodeURI(
                                  facebookShareLink
                                )}`
                              : ""
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledShareButton
                            className="rbq_mobile_facebook_share_button"
                            shareTo="facebook"
                          >
                            <GrFacebook className="rbq_mobile_facebook_share_button_icon" />
                            <p>Share</p>
                          </StyledShareButton>
                        </a>
                      ) : null}
                      {twitterShareButton ? (
                        <a
                          href={
                            twitterShareLink
                              ? `https://twitter.com/intent/tweet?url=${encodeURI(
                                  twitterShareLink
                                )}${
                                  twitterShareText
                                    ? `&text=${encodeURIComponent(
                                        twitterShareText
                                      )}`
                                    : ""
                                }${
                                  twitterShareHashtags
                                    ? twitterShareHashtags.length > 0
                                      ? `&hashtags=${twitterShareHashtags
                                          .map((item) =>
                                            encodeURIComponent(item)
                                          )
                                          .join()}`
                                      : ""
                                    : ""
                                }`
                              : ""
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledShareButton
                            className="rbq_mobile_twitter_share_button"
                            shareTo="twitter"
                          >
                            <GrTwitter className="rbq_mobile_twitter_share_button_icon" />
                            <p>Tweet</p>
                          </StyledShareButton>
                        </a>
                      ) : null}
                      {copyShareButton ? (
                        <StyledShareLinkButtonOuterContainer>
                          {shareLinkClicked ? (
                            <StyledTooltipContainer
                              shareLinkAnimatingOut={shareLinkAnimatingOut}
                              className="rbq_mobile_link_share_copied_tooltip"
                            >
                              <IoIosCheckmarkCircle />
                              <p>Link copied!</p>
                            </StyledTooltipContainer>
                          ) : null}
                          <StyledShareButton
                            className="rbq_mobile_link_share_button"
                            shareTo="link"
                            onClick={() =>
                              handleShareLinkClicked(copyShareLink)
                            }
                          >
                            <IoIosLink className="rbq_mobile_link_share_icon" />
                            <p>Copy Link</p>
                          </StyledShareButton>
                        </StyledShareLinkButtonOuterContainer>
                      ) : null}
                    </StyledMobileShareLinksList>
                  </StyledResultInnerContainer>
                  <StyledMobileRetakeQuizContainer
                    className="rbq_mobile_retake_container"
                    onClick={handleRetakeQuiz}
                  >
                    <GrRefresh className="rbq_mobile_retake_icon" />
                    <p>Retake Quiz</p>
                  </StyledMobileRetakeQuizContainer>
                </StyledResultOuterContainer>
              ) : null}
            </>
          ) : null
        ) : null}
      </StyledInnerQuizContainer>
    </StyledOuterQuizContainer>
  );
};

ReactBuzzFeedQuiz.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  byline: PropTypes.bool,
  bylineAuthor: PropTypes.string,
  bylineAuthorLink: PropTypes.string,
  bylineAuthorLinkOpenInNewTab: PropTypes.bool,
  bylineAuthorTagline: PropTypes.string,
  bylineAvatarImageSrc: PropTypes.string,
  generalTheme: PropTypes.string,
  autoScroll: PropTypes.bool,
  facebookShareButton: PropTypes.bool,
  facebookShareLink: PropTypes.string,
  twitterShareButton: PropTypes.bool,
  twitterShareLink: PropTypes.string,
  twitterShareText: PropTypes.string,
  twitterShareHashtags: PropTypes.arrayOf(PropTypes.string),
  copyShareButton: PropTypes.bool,
  copyShareLink: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      specificTheme: PropTypes.string,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string.isRequired,
          specificTheme: PropTypes.string,
          resultID: PropTypes.number.isRequired,
        })
      ),
    })
  ),
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      resultImageSrc: PropTypes.string.isRequired,
      resultID: PropTypes.number.isRequired,
    })
  ),
};

ReactBuzzFeedQuiz.defaultProps = {
  byline: true,
  bylineAuthorLinkOpenInNewTab: false,
  autoScroll: true,
  copyShareButton: true,
  facebookShareButton: true,
  twitterShareButton: true,
  twitterShareHashtags: [],
  copyShareButton: true,
};

export default ReactBuzzFeedQuiz;
