import React, { FC } from "react";
import { FaUser } from "react-icons/fa";
import { StyledAvatar } from "./styled/Byline/StyledAvatar";
import { StyledAvatarContainer } from "./styled/Byline/StyledAvatarContainer";
import { StyledBylineAuthorDescriptor } from "./styled/Byline/StyledBylineAuthorDescriptor";
import { StyledBylineAuthorDescriptorContainer } from "./styled/Byline/StyledBylineAuthorDescriptorContainer";
import { StyledBylineContainer } from "./styled/Byline/StyledBylineContainer";
import { BylineType } from "../interfaces";

const Byline: FC<BylineType> = (props) => {
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
                  rel="noopener noreferrer"
                >
                  <strong>{bylineAuthor}</strong>
                </a>
              ) : (
                <strong>{bylineAuthor}</strong>
              )}
            </StyledBylineAuthorDescriptor>
          ) : null}
          {bylineAuthorTagline ? (
            <StyledBylineAuthorDescriptor className="rbq_byline_tagline">
              {bylineAuthorTagline}
            </StyledBylineAuthorDescriptor>
          ) : null}
        </StyledBylineAuthorDescriptorContainer>
      </StyledBylineContainer>
    );
  } else {
    return null;
  }
};

export default Byline;
