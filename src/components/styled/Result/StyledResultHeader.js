import styled from "styled-components";

export const StyledResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    padding-top: 2px;
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: center;
    @media (min-width: 40rem) {
      font-size: 1.375rem;
      line-height: 1.27;
      text-align: left;
      margin-right: 1.5rem;
    }
  }
  p {
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 0;
    margin-top: 0;
    color: #fff;
    font-weight: 600;
    display: none;
    @media (min-width: 40rem) {
      display: inline-block;
    }
  }
`;