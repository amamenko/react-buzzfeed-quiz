import styled from "styled-components";

export const StyledQuestionContainer = styled.div`
  min-height: ${(props) =>
    props.questionRelativeToImage === "adjacent"
      ? "calc(277px / 1.5)"
      : "calc(345px / 1.5)"};
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
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.backgroundImageSrc
      ? "transparent"
      : "#000"};
  margin-bottom: ${(props) => ((props.backgroundImageSrc && props.imageAttribution) ? 0 : "1rem")};
  background-image: ${(props) =>
    props.backgroundImageSrc ? `url(${props.backgroundImageSrc})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(322px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 360px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(384px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 400px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(424px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 500px) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "calc(568px / 1.5)"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 40rem) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent"
        ? "443px"
        : "calc(345px / 1.5)"};
  }
  @media (min-width: 52rem) {
    min-height: ${(props) =>
      props.questionRelativeToImage === "adjacent" ? "443px" : "345px"};
  }
`;