import styled from "styled-components";

export const StyledTooltipContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #222;
  max-width: 100%;
  max-height: 1.5rem;
  bottom: 0;
  white-space: nowrap;
  border: 1px solid #222;
  box-shadow: 0 1px 1px rgb(173 168 168 / 10%);
  border-radius: 3px;
  margin-bottom: 61px;
  padding: 0.5rem 0.8rem;
  line-height: 1.5rem;
  min-width: 4rem;
  transform: translate(-2%, 0%);
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: ${(props) =>
    props.shareLinkAnimatingOut === true
      ? "fadeout 0.5s ease"
      : "fadein 0.2s ease"};
  @media (min-width: 40rem) {
    padding: 0.4rem 0.625rem;
    margin-bottom: 45px;
  }
  svg {
    padding-right: 0.25rem;
  }
  p {
    font-size: 0.8rem;
    padding-left: 0.25rem;
  }
  &::after {
    content: "";
    border-top-color: #222;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -0.5875rem;
    border-width: 0.5875rem;
    border-style: solid;
    border-color: #222 transparent transparent transparent;
  }
`;