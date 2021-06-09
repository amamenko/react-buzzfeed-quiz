import React, { FC } from "react";
import { FaUser } from "react-icons/fa";
import BylineProps from "../interfaces/Byline/byline_props.interface";

const Byline: FC<BylineProps> = (props) => {
  const {
    byline,
    bylineAuthor,
    bylineAvatarImageSrc,
    bylineAuthorLink,
    bylineAuthorTagline,
    bylineAuthorLinkOpenInNewTab,
  } = props;

  if (byline) {
    return (
      <div className="rbq_byline_container">
        {bylineAuthor && (
          <div className="rbq_avatar_container">
            {bylineAvatarImageSrc ? (
              <img
                className="rbq_avatar"
                alt={bylineAuthor}
                src={bylineAvatarImageSrc}
              />
            ) : (
              <FaUser className="rbq_avatar_icon" />
            )}
          </div>
        )}
        <span className="rbq_byline_author_descriptor_container">
          {bylineAuthor && (
            <p className="rbq_byline_author_descriptor rbq_byline_author">
              by{" "}
              {bylineAuthorLink ? (
                <a
                  href={bylineAuthorLink}
                  target={bylineAuthorLinkOpenInNewTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <strong>{bylineAuthor}</strong>
                </a>
              ) : (
                <strong>{bylineAuthor}</strong>
              )}
            </p>
          )}
          {bylineAuthorTagline && (
            <p className="rbq_byline_author_descriptor rbq_byline_tagline">
              {bylineAuthorTagline}
            </p>
          )}
        </span>
      </div>
    );
  } else {
    return null;
  }
};

export default Byline;
