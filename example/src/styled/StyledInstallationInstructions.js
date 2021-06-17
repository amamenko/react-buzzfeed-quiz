import styled from "styled-components";

const StyledInstallationInstructions = styled.div`
  padding: 16px;
  margin: 0px auto;
  background: rgb(30, 30, 30);
  max-width: 600px;
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 767px) {
    margin: 0px 16px;
    margin-bottom: 0px;
  }

  code {
    margin: 0 auto;
    font-family: Courier New, Courier, monospace;
    opacity: 0.9;
    color: #fff;
  }
`;

export default StyledInstallationInstructions;
