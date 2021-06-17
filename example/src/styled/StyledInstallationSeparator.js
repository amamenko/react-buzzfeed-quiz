import styled from "styled-components";

const StyledInstallationSeparator = styled.div`
  position: relative;
  background: #fff;
  color: #000;
  max-width: 630px;
  text-align: left;
  margin: 0px 16px;
  margin-top: ${(props) => (props.first ? "70px" : "0px")};

  @media (min-width: 768px) {
    margin: auto;
    margin-top: ${(props) => (props.first ? "100px" : "0px")};
  }
`;

export default StyledInstallationSeparator;
