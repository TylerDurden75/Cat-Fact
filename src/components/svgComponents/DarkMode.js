import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  transform: scale(10);
`;

const DarkMode = (props) => (
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
      d="M740.76-202.41c-11.68-.01-21.13-9.48-21.1-21.16.03-11.7 9.47-21.13 21.14-21.13 11.71.01 21.13 9.51 21.1 21.29-.04 11.61-9.5 21.01-21.14 21z"
      style={{
        fill: "#fa0",
      }}
    />
    <path d="M740.88-207.32c.11-.19-1.38-3.01-1.53-3.37-.52-1.23-1.02-2.47-1.45-3.75-1.5-4.4-2.1-9.32-1.41-14.04.36-2.46 1.09-4.73 2.05-6.91.19-.43 2.26-4.99 2.2-5.06 6.43 7.17 6.49 21.89.14 33.13z" />
  </Svg>
);

export default DarkMode;
