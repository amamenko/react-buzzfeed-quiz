import styled from "styled-components";

export const StyledAvatarContainer = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 0.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(211, 211, 211);
  padding: 0;
  font-size: 1rem;
  color: rgb(90, 90, 90);
  @media (min-width: 40rem) {
    height: 56px;
    width: 56px;
    font-size: 1.5rem;
  }
`;