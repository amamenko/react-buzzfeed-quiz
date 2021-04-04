import styled from "styled-components";

export const StyledTextfit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  padding: 1rem;
  transition: transform 0.15s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  color: ${(props) => (props.fontColor ? props.fontColor : "#fff")};

  p {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
