import styled from "styled-components";

export const StyledQuestionOverlapText = styled.p`
  z-index: 3;
  margin: 0;
  line-height: 1.1;
  text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  -webkit-text-stroke: ${(props) =>
    props.backgroundImageSrc ? "calc(2px / 1.5) #000000" : 0};
  padding: 10px;
  font-weight: 900;
  font-size: calc(62px / 2);
  color: ${(props) => (props.fontColor ? props.fontColor : "#fff")};
  @media (min-width: 40rem) {
    font-size: calc(55px / 1.5);
  }
  @media (min-width: 52rem) {
    font-size: 55px;
    transform: scale(0.8);
  }
`;
