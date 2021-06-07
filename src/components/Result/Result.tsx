import React, { FC, useMemo } from "react";
import { GrRefresh } from "react-icons/gr";
import { ResultProps } from "../../interfaces";
import { Element } from "react-scroll";
import FacebookButton from "./ShareButtons/FacebookButton";
import TwitterButton from "./ShareButtons/TwitterButton";
import CopyLinkButton from "./ShareButtons/CopyLinkButton";

const Result: FC<ResultProps> = (props) => {
  const {
    title,
    resultsAvailable,
    finalResult,
    facebookShareButton,
    facebookShareLink,
    twitterShareButton,
    twitterShareLink,
    twitterShareText,
    twitterShareHashtags,
    copyShareButton,
    copyShareLink,
    shareLinkClicked,
    changeShareLinkClicked,
    shareLinkAnimatingOut,
    changeShareLinkAnimatingOut,
    scrollFunction,
    changeResultsAvailable,
    changeSelectedAnswers,
    changeFinalResult,
    onResult,
    onRestart,
  } = props;

  const handleRetakeQuiz = () => {
    scrollFunction("Top", -2);
    changeResultsAvailable(false);
    changeSelectedAnswers([]);
    changeFinalResult([]);

    if (shareLinkClicked) {
      changeShareLinkClicked(false);
    }

    if (shareLinkAnimatingOut) {
      changeShareLinkAnimatingOut(false);
    }

    if (onRestart) {
      if (typeof onRestart === "function") {
        onRestart();
      }
    }
  };

  useMemo(() => {
    const generalOnResultFunction = () => {
      if (onResult) {
        if (typeof onResult === "function") {
          onResult();
        }
      }
    };

    if (resultsAvailable && finalResult.length > 0) {
      if (finalResult[0].onResult) {
        if (typeof finalResult[0].onResult === "function") {
          finalResult[0].onResult();
        } else {
          generalOnResultFunction();
        }
      } else {
        generalOnResultFunction();
      }
    }
  }, [resultsAvailable, finalResult, onResult]);

  if (resultsAvailable && finalResult.length > 0) {
    return (
      <Element className="rbq_result_outer_container" name="Result">
        <div className="rbq_result_header">
          <h2>{title}</h2>
          <div className="rbq_retake_quiz_container" onClick={handleRetakeQuiz}>
            <GrRefresh className="rbq_retake_icon" />
            <p>Retake Quiz</p>
          </div>
        </div>
        <div className="rbq_result_inner_container">
          <div className="rbq_result_inner_description_container">
            <h3 className="rbq_result_inner_description_header">
              You got: {finalResult[0].title}
            </h3>
            <p className="rbq_result_inner_description">
              {finalResult[0].description}
            </p>
            {finalResult[0].resultImageSrc &&
            finalResult[0].imageAttribution ? (
              <p className="rbq_result_attribution_text">
                <i>{finalResult[0].imageAttribution}</i>
              </p>
            ) : null}
            <div className="rbq_share_links_container">
              {facebookShareButton && (
                <FacebookButton facebookShareLink={facebookShareLink} />
              )}
              {twitterShareButton && (
                <TwitterButton
                  twitterShareLink={twitterShareLink}
                  twitterShareText={twitterShareText}
                  twitterShareHashtags={twitterShareHashtags}
                />
              )}
              {copyShareButton && (
                <CopyLinkButton
                  shareLinkClicked={shareLinkClicked}
                  changeShareLinkClicked={changeShareLinkClicked}
                  shareLinkAnimatingOut={shareLinkAnimatingOut}
                  copyShareLink={copyShareLink}
                />
              )}
            </div>
          </div>
          {finalResult[0].resultImageSrc && (
            <div className="rbq_result_inner_image_container">
              <img
                className="rbq_result_inner_image"
                alt="Buzzfeed Quiz Result Image"
                src={finalResult[0].resultImageSrc}
              />
            </div>
          )}
          <div className="rbq_mobile_share_links_container">
            {facebookShareButton && (
              <FacebookButton facebookShareLink={facebookShareLink} isMobile />
            )}
            {twitterShareButton && (
              <TwitterButton
                twitterShareLink={twitterShareLink}
                twitterShareText={twitterShareText}
                twitterShareHashtags={twitterShareHashtags}
                isMobile
              />
            )}
            {copyShareButton && (
              <CopyLinkButton
                shareLinkClicked={shareLinkClicked}
                changeShareLinkClicked={changeShareLinkClicked}
                shareLinkAnimatingOut={shareLinkAnimatingOut}
                copyShareLink={copyShareLink}
                isMobile
              />
            )}
          </div>
        </div>
        <div
          className="rbq_mobile_retake_quiz_container"
          onClick={handleRetakeQuiz}
        >
          <GrRefresh className="rbq_mobile_retake_icon" />
          <p className="rbq_mobile_retake_text">Retake Quiz</p>
        </div>
      </Element>
    );
  } else {
    return null;
  }
};

export default Result;
