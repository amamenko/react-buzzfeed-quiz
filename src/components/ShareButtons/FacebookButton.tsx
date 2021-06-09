import React, { FC } from "react";
import { GrFacebook } from "react-icons/gr";
import FacebookButtonProps from "../../interfaces/Result/ShareButtons/facebook_button.interface";

const FacebookButton: FC<FacebookButtonProps> = ({
  facebookShareLink,
  isMobile,
}) => {
  return (
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
      <span
        className={`rbq_share_button rbq_facebook_share_button ${
          isMobile ? "rbq_mobile_facebook_share_button" : ""
        }`}
      >
        <GrFacebook
          className={`${
            isMobile
              ? "rbq_mobile_facebook_share_button_icon"
              : "rbq_facebook_share_button_icon"
          }`}
        />
        <p
          className={`${
            isMobile
              ? "rbq_mobile_facebook_share_button_text"
              : "rbq_facebook_share_button_text"
          }`}
        >
          Share
        </p>
      </span>
    </a>
  );
};

export default FacebookButton;
