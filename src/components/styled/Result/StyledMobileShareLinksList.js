import styled from "styled-components";

export const StyledMobileShareLinksList = styled.div`
  padding-left: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  a {
    text-decoration: none;
  }
  @media (min-width: 40rem) {
    display: none;
  }
`;