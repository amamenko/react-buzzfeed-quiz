import styled from "styled-components";

export const StyledShareButton = styled.span`
  background-color: ${(props) =>
        props.shareTo === "facebook"
            ? "#3b5998"
            : props.shareTo === "twitter"
                ? "#55acee"
                : "#0f65ef"};
  border: ${(props) =>
        props.shareTo === "facebook"
            ? "1px solid #3b5998"
            : props.shareTo === "twitter"
                ? "1px solid #55acee"
                : "1px solid #0f65ef"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 0.875rem;
  margin-right: 0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  font-size: 0.875rem;
  min-width: 4rem;
  width: ${(props) => (props.shareTo === "link" ? "100%" : "auto")};
  max-height: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: background-color 0.1s ease, border 0.1s ease;
  @media (min-width: 40rem) {
    padding: 0.2rem 0.625rem;
    line-height: 1.25rem;
    margin-bottom: 0;
    width: auto;
  }
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.7rem;
    position: relative;
    position: relative;
    @media (min-width: 40rem) {
      top: auto;
      width: 0.875rem;
      height: 0.875rem;
      margin-right: 0.3125rem;
    }
  }
  &:hover {
    background-color: ${(props) =>
        props.shareTo === "facebook"
            ? "#2d4373"
            : props.shareTo === "twitter"
                ? "#2795e9"
                : "#0c51bf"};
    border: ${(props) =>
        props.shareTo === "facebook"
            ? "1px solid #2d4373"
            : props.shareTo === "twitter"
                ? "1px solid #2795e9"
                : "1px solid #0c51bf"};
  }
`;