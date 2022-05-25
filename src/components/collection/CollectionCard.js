import React, { memo } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/image";
import earthIcon from "../../assets/earth.png";
import CatPaw from "../svgComponents/CatPaw";

const CollectionWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: var(--color-bg-element);
  border-radius: none;
  overflow: hidden;
  width: 250px;
  height: 420px;
  cursor: pointer;
  transition: all 0.4s linear;

  &:hover {
    transition: 0.7s ease;
    transform: scale(1.1);
    border: 5px solid ${({ theme }) => theme.text};
  }
`;

const CardImage = styled.img`
  width: 85%;
  max-height: 54%;
  margin-top: 1rem;
`;

const Details = styled.div`
  padding: 15px;
`;

const Breed = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Coat = styled.div`
  color: #a1a5b0;
  font-size: 18px;
  font-weight: 500;
`;

const CountryContainer = styled.div`
  margin-top: 10px;
  object-fit: contain;
`;

const EarthIcon = styled.img`
  width: 20px;
`;

const Country = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;

const MemoedCardImage = memo(CardImage, (prevProps, nextProps) => {
  return prevProps.updateAt === nextProps.updateAt;
});

const CollectionCard = ({ breed, country, coat, handleClick }) => {
  const imageList = useGetImage();
  const { data } = imageList;

  return (
    <CollectionWrapper onClick={handleClick}>
      {data &&
        data.map((el, idx) => (
          <MemoedCardImage key={idx} src={el.url} alt="cat-photo" />
        ))}
      <Details>
        <CatPaw />
        <Breed>
          {breed} <Coat>{coat}</Coat>
        </Breed>
        <CountryContainer>
          <EarthIcon src={earthIcon} alt="world-map" />
          <Country>{country}</Country>
        </CountryContainer>
      </Details>
    </CollectionWrapper>
  );
};

export default CollectionCard;
