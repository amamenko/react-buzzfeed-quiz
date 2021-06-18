import styled from "styled-components";

const StyledNav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid rgb(235, 235, 235);

  a {
    text-decoration: none;
    color: rgb(80, 80, 80);
  }
`;

export default StyledNav;
