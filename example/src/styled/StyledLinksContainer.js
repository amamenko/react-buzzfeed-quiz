import styled from "styled-components";

const StyledLinksContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-right: 1rem;

  @media (max-width: 330px) {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  a {
    &:first-child {
      padding-right: 1rem;
    }

    &:nth-child(2) {
      padding-right: 1rem;
    }

    &:active:first-child {
      color: #000;
    }

    &:active:nth-child(2) {
      color: #cb0000;
    }

    &:active:nth-child(3) {
      color: #117cad;
    }
  }

  @media (min-width: 1200px) {
    font-size: 2rem;

    a {
      transition: color 0.3s ease;

      &:hover:first-child {
        color: #000;
      }

      &:hover:nth-child(2) {
        color: #cb0000;
      }

      &:hover:nth-child(3) {
        color: #117cad;
      }
    }
  }
`;

export default StyledLinksContainer;
