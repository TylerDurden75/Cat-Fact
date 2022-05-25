import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 30px;
  padding: 0;
  border: 0;
  text-align: center;
  font: inherit;
  font-size: 100%;
  letter-spacing: 1px;
  font-family: 'Bebas Neue', cursive;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body}; 
  --color-bg-element: ${({ theme }) => theme.element};
  transition: all .4s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none; 
    scrollbar-width: none;
    overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none
  }
}

p {
  opacity: 0.6;
  line-height: 1.5;
}

img {
  max-width: 100%
}
`;

export const lightTheme = {
  body: "#f5Ede8",
  text: "#171717",
  element: "rgba(0,0,0,0.06)",
};

export const darkTheme = {
  text: "#fff",
  body: "#171717",
  element: "#1a1c1e",
};
