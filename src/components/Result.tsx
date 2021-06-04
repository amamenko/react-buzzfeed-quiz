import React, { FC, useMemo } from "react";
import { GrRefresh, GrFacebook, GrTwitter } from "react-icons/gr";
import { IoIosLink, IoIosCheckmarkCircle } from "react-icons/io";
import { ResultProps } from "../interfaces";
import { StyledMobileRetakeQuizContainer } from "./styled/Result/StyledMobileRetakeQuizContainer";
import { StyledMobileShareLinksList } from "./styled/Result/StyledMobileShareLinksList";
import { StyledResultAttributionText } from "./styled/Result/StyledResultAttributionText";
import { StyledResultHeader } from "./styled/Result/StyledResultHeader";
import { StyledResultInnerContainer } from "./styled/Result/StyledResultInnerContainer";
import { StyledResultInnerDescription } from "./styled/Result/StyledResultInnerDescription";
import { StyledResultInnerDescriptionContainer } from "./styled/Result/StyledResultInnerDescriptionContainer";
import { StyledResultInnerDescriptionHeader } from "./styled/Result/StyledResultInnerDescriptionHeader";
import { StyledResultInnerImage } from "./styled/Result/StyledResultInnerImage";
import { StyledResultInnerImageContainer } from "./styled/Result/StyledResultInnerImageContainer";
import { StyledResultOuterContainer } from "./styled/Result/StyledResultOuterContainer";
import { StyledRetakeQuizContainer } from "./styled/Result/StyledRetakeQuizContainer";
import { StyledShareButton } from "./styled/Result/StyledShareButton";
import { StyledShareLinkButtonOuterContainer } from "./styled/Result/StyledShareLinkButtonOuterContainer";
import { StyledShareLinksList } from "./styled/Result/StyledShareLinksList";
import { StyledTooltipContainer } from "./styled/Result/StyledTooltipContainer";

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

  const handleShareLinkClicked = (shareLink: string) => {
    // Handle copy to clipboard
    const el = document.createElement("textarea");
    el.value = shareLink;
    el.setAttribute("readonly", "");
    el.setAttribute("style", "position: absolute; left: -9999px;");
    document.body.appendChild(el);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      let editable = el.contentEditable;
      let readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = "true";
      el.readOnly = true;

      // create a selectable range
      let range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      let selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        el.setSelectionRange(0, 999999);

        // restore contentEditable/readOnly to original state
        el.contentEditable = editable;
        el.readOnly = readOnly;
      }
    } else {
      el.select();
    }

    document.execCommand("copy");
    document.body.removeChild(el);

    if (!shareLinkClicked) {
      changeShareLinkClicked(true);
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
      <StyledResultOuterContainer className="rbq_result" name="Result">
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
            {finalResult[0].resultImageSrc &&
            finalResult[0].imageAttribution ? (
              <StyledResultAttributionText className="rbq_result_attribution">
                <i>{finalResult[0].imageAttribution}</i>
              </StyledResultAttributionText>
            ) : null}
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
                            ? `&text=${encodeURIComponent(twitterShareText)}`
                            : ""
                        }${
                          twitterShareHashtags
                            ? twitterShareHashtags.length > 0
                              ? `&hashtags=${twitterShareHashtags
                                  .map((item) => encodeURIComponent(item))
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
                    onClick={() => handleShareLinkClicked(copyShareLink)}
                  >
                    <IoIosLink className="rbq_link_share_button_icon" />
                    <p className="rbq_link_share_button_text">Copy Link</p>
                  </StyledShareButton>
                </StyledShareLinkButtonOuterContainer>
              ) : null}
            </StyledShareLinksList>
          </StyledResultInnerDescriptionContainer>
          {finalResult[0].resultImageSrc ? (
            <StyledResultInnerImageContainer className="rbq_result_inner_image_container">
              <StyledResultInnerImage
                className="rbq_result_inner_image"
                alt="Buzzfeed Quiz Result Image"
                src={finalResult[0].resultImageSrc}
              />
            </StyledResultInnerImageContainer>
          ) : null}
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
                          ? `&text=${encodeURIComponent(twitterShareText)}`
                          : ""
                      }${
                        twitterShareHashtags
                          ? twitterShareHashtags.length > 0
                            ? `&hashtags=${twitterShareHashtags
                                .map((item) => encodeURIComponent(item))
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
                  <p className="rbq_mobile_twitter_share_button_text">Tweet</p>
                </StyledShareButton>
              </a>
            ) : null}
            {copyShareButton ? (
              <StyledShareLinkButtonOuterContainer className="rbq_mobile_link_container">
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
                  onClick={() => handleShareLinkClicked(copyShareLink)}
                >
                  <IoIosLink className="rbq_mobile_link_share_icon" />
                  <p className="rbq_mobile_link_share_text">Copy Link</p>
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
          <p className="rbq_mobile_retake_text">Retake Quiz</p>
        </StyledMobileRetakeQuizContainer>
      </StyledResultOuterContainer>
    );
  } else {
    return null;
  }
};

export default Result;
