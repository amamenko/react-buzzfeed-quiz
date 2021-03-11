import { createGlobalStyle } from "styled-components";

// Preload fonts and prevent styled-components from re-importing fonts on every re-render
export default createGlobalStyle` 
  @import url("ProximaNovaFont.css");
`;
