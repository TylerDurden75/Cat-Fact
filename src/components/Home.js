import React, { useState } from "react";
import styled from "styled-components";
import { useGetBreeds } from "../hooks/breeds";

import CollectionCard from "./collection/CollectionCard";
import Fact from "./fact/Fact";
import Header from "./header/Header";
import Pagination from "./pagination/Pagination";

const CardLayout = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media only screen and (max-width: 1224px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media only screen and (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media only screen and (max-width: 648px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

const Home = ({ theme, toggleTheme }) => {
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const breedsList = useGetBreeds(activePage);
  const { isLoading, data, isError } = breedsList;

  const handleClick = () => {
    setActive(!active);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error getting breeds...</p>;
  }

  return (
    <>
      <Header
        filter={(event) => {
          setSearch(event.target.value);
        }}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <CardLayout>
        {data &&
          data
            .filter((value) => {
              if (
                search === "" ||
                value.breed.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((el, idx) => (
              <CollectionCard
                key={idx}
                breed={el.breed}
                country={el.country ? el.country : "no data"}
                coat={el.coat ? el.coat : "no data"}
                handleClick={() => handleClick()}
              />
            ))}
        {active && <Fact />}
      </CardLayout>

      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={4}
      />
    </>
  );
};

export default Home;
