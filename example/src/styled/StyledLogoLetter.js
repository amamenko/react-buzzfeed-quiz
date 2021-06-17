import styled from "styled-components";

const StyledLogoLetter = styled.h1`
  color: ${(props) => (props.buzzfeed ? "rgb(238, 50, 34)" : "#000")};

  font-size: 1.5rem;
  padding-right: 0.4rem;

  @media (max-width: 375px) {
    font-size: 1rem;
    padding-right: 0.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
    padding-right: 0.5rem;
  }
`;

export default StyledLogoLetter;
