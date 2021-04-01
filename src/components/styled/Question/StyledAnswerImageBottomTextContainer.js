import styled from "styled-components";

export const StyledAnswerImageBottomTextContainer = styled.div`
  width: 100%;
  margin: 0;
  -webkit-box-shadow: inset 0 0 0 8px rgb(0 0 0 / 0%);
  box-shadow: inset 0 0 0 8px rgb(0 0 0 / 0%);
  color: ${(props) => (props.selected ? "#fff" : "#222")};
  background: ${(props) => (props.selected ? "#0f65ef" : "#fff")};
  line-height: 1.3;
`;