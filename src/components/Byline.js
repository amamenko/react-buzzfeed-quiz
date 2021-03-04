import React from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";

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

const Byline = (props) => {
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
