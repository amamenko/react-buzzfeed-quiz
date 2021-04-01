import styled from "styled-components";

export const StyledShareLinksList = styled.div`
  padding-left: 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  display: none;
  a {
    text-decoration: none;
  }
  @media (min-width: 40rem) {
    display: flex;
    flex-direction: row;
    align: center;
    justify-content: flex-start;
  }
`;