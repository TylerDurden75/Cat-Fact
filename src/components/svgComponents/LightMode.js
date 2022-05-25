import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  transform: scale(6);
`;

const LightMode = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 244.82"
    style={{
      enableBackground: "new 0 0 400 244.82",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M199.98 143.56c-11.68-.01-21.13-9.48-21.1-21.16.03-11.7 9.47-21.13 21.14-21.13 11.71.01 21.13 9.51 21.1 21.29-.03 11.61-9.5 21.01-21.14 21z"
      style={{
        fill: "#fa0",
      }}
    />
    <path d="M199.98 137.05c-8.71 0-15.76-7.07-15.74-15.78.02-8.73 7.06-15.77 15.77-15.76 8.74.01 15.77 7.1 15.74 15.88-.02 8.65-7.08 15.67-15.77 15.66z" />
    <path
      d="M199.75 119.99c-3.52 0-6.38-2.86-6.37-6.39s2.86-6.38 6.38-6.38c3.54 0 6.38 2.87 6.37 6.43-.01 3.49-2.87 6.34-6.38 6.34z"
      style={{
        fill: "#fff",
      }}
    />
  </Svg>
);

export default LightMode;
