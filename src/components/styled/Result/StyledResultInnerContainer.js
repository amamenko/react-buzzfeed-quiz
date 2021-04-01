import styled from "styled-components";

export const StyledResultInnerContainer = styled.div`
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 40rem) {
    flex-direction: row;
  }
`;