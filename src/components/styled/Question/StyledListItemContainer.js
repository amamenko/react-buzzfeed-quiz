import styled from "styled-components";

export const StyledListItemContainer = styled.li`
  margin-top: ${(props) => (props.questionIndex === 0 ? 0 : "100px")};
  margin-bottom: 2rem;
`;