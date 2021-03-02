import React, { useMemo } from "react";
import styled from "styled-components";
import { GrRefresh, GrFacebook, GrTwitter } from "react-icons/gr";
import { IoIosLink, IoIosCheckmarkCircle } from "react-icons/io";

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

const Result = (props) => {
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

    if (onRestart) {
      if (typeof onRestart === "function") {
        onRestart();
      }
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
                  onClick={() => handleShareLinkClicked(copyShareLink)}
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
    );
  } else {
    return null;
  }
};

export default Result;
