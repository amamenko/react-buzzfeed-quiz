import styled from "styled-components";
import Textfit from "react-textfit/lib/Textfit";

export const StyledTextfit = styled(Textfit)`
  color: white;
  position: relative;
  height: 60%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s cubic-bezier(0.64, 0.57, 0.67, 1.53);

  cursor: ${(props) =>
    props.hovered
      ? props.answered
        ? props.selected
          ? "auto"
          : "pointer"
        : "pointer"
      : "pointer"};
  transform: ${(props) =>
    props.hovered
      ? props.resultsAvailable
        ? "scale(1)"
        : props.answerArrangement === "row"
        ? "scale(1)"
        : props.answered
        ? props.selected
          ? "scale(1)"
          : "scale(1.05)"
        : "scale(1.05)"
      : "scale(1)"};

  @media (max-width: 900px) {
    transform: none;

    @keyframes bounceClick {
      0% {
        transform: none;
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: none;
      }
    }

    animation-name: ${(props) =>
      props.hovered
        ? props.resultsAvailable
          ? "none"
          : props.answerArrangement === "row"
          ? "none"
          : props.answered
          ? props.selected
            ? "none"
            : "bounceClick"
          : "bounceClick"
        : "none"};
    animation-duration: 0.2s;
  }
`;
