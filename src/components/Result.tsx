import React, { FC, useMemo } from "react";
import { GrRefresh, GrFacebook, GrTwitter } from "react-icons/gr";
import { IoIosLink, IoIosCheckmarkCircle } from "react-icons/io";
import { ResultProps } from "../interfaces";
import { Element } from "react-scroll";

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
                  <span className="rbq_share_button rbq_facebook_share_button">
                    <GrFacebook className="rbq_facebook_share_button_icon" />
                    <p>Share</p>
                  </span>
                </a>
              )}
              {twitterShareButton && (
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
                  <span className="rbq_share_button rbq_twitter_share_button">
                    <GrTwitter className="rbq_twitter_share_button_icon" />
                    <p>Tweet</p>
                  </span>
                </a>
              )}
              {copyShareButton && (
                <div className="rbq_share_link_button_outer_container">
                  {shareLinkClicked && (
                    <div
                      className={`rbq_tooltip_container rbq_link_share_copied_tooltip ${
                        shareLinkAnimatingOut && "rbq_tooltip_animating_out"
                      }`}
                    >
                      <IoIosCheckmarkCircle />
                      <p>Link copied!</p>
                    </div>
                  )}
                  <span
                    className="rbq_share_button rbq_link_share_button"
                    onClick={() => handleShareLinkClicked(copyShareLink)}
                  >
                    <IoIosLink className="rbq_link_share_button_icon" />
                    <p className="rbq_link_share_button_text">Copy Link</p>
                  </span>
                </div>
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
                <span className="rbq_share_button rbq_facebook_share_button rbq_mobile_facebook_share_button">
                  <GrFacebook className="rbq_mobile_facebook_share_button_icon" />
                  <p>Share</p>
                </span>
              </a>
            )}
            {twitterShareButton && (
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
                <span className="rbq_share_button rbq_twitter_share_button rbq_mobile_twitter_share_button">
                  <GrTwitter className="rbq_mobile_twitter_share_button_icon" />
                  <p className="rbq_mobile_twitter_share_button_text">Tweet</p>
                </span>
              </a>
            )}
            {copyShareButton && (
              <div className="rbq_mobile_link_container">
                {shareLinkClicked ? (
                  <div
                    className={`rbq_tooltip_container rbq_mobile_link_share_copied_tooltip ${
                      shareLinkAnimatingOut && "rbq_tooltip_animating_out"
                    }`}
                  >
                    <IoIosCheckmarkCircle />
                    <p>Link copied!</p>
                  </div>
                ) : null}
                <span
                  className="rbq_share_button rbq_link_share_button rbq_mobile_link_share_button"
                  onClick={() => handleShareLinkClicked(copyShareLink)}
                >
                  <IoIosLink className="rbq_mobile_link_share_icon" />
                  <p className="rbq_mobile_link_share_text">Copy Link</p>
                </span>
              </div>
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
