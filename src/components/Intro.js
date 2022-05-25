import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Fact from "./fact/Fact";
import ButtonMenhir from "./button/ButtonMenhir";

const Intro = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);

  let navigate = useNavigate();

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 0.5);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const handleClick = () => {
    navigate("/breeds");
  };

  return (
    <>
      {preloader ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Fact />
          <ButtonMenhir handleClick={() => handleClick()}>visit</ButtonMenhir>
        </>
      )}
    </>
  );
};

export default Intro;
