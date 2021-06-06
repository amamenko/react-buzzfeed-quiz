import React, { FC } from "react";
import { GrTwitter } from "react-icons/gr";
import { TwitterButtonProps } from "../../../interfaces";

const TwitterButton: FC<TwitterButtonProps> = ({
  twitterShareLink,
  twitterShareText,
  twitterShareHashtags,
  isMobile,
}) => {
  return (
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
      <span
        className={`rbq_share_button rbq_twitter_share_button ${
          isMobile && "rbq_mobile_twitter_share_button"
        }`}
      >
        <GrTwitter
          className={`rbq_twitter_share_button_icon ${
            isMobile && "rbq_mobile_twitter_share_button_icon"
          }`}
        />
        <p
          className={`${
            isMobile
              ? "rbq_mobile_twitter_share_button_text"
              : "rbq_twitter_share_button_text"
          }`}
        >
          Tweet
        </p>
      </span>
    </a>
  );
};

export default TwitterButton;
