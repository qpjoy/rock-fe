import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset}
 /* other styles */
 body {
 line-height: 1;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
 "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
 sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 }
 html, body {
 cursor: none;
 /* background: #e1dfdd; */
 }
 * {
 min-height: 0;
 min-width: 0;
 box-sizing: border-box;
 -webkit-backface-visibility: hidden;
 }
 img {
 display: block;
 width: 100%;
 height: auto;
 }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
