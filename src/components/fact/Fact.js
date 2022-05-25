import React from "react";
import styled from "styled-components";
import { useFact } from "../../hooks/fact";
import BulleTooltip from "../svgComponents/BulleTooltip";

const FactWrapper = styled.div`
  position: absolute;
  width: 25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 1224px) {
    width: 50%;
  }

  @media only screen and (max-width: 868px) {
    width: 50%;
  }

  @media only screen and (max-width: 648px) {
    width: 100%;
  }
`;

const Fact = () => {
  const randomFact = useFact();
  const { data } = randomFact;

  return (
    <FactWrapper>
      <BulleTooltip data={data} />
    </FactWrapper>
  );
};

export default Fact;
