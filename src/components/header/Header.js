import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Logo from "../svgComponents/Logo";
import iconSun from "../../assets/icons-sun.svg";
import iconMoon from "../../assets/moon.svg";
import SearchGlass from "../svgComponents/Search";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 10px;
`;

const CatLogo = styled.div`
  width: 50px;
  border-radius: 50px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  background-color: ${({ theme }) => theme.element};
  transition: all 0.4s linear;
  height: 50px;
  flex: 1;
  display: flex;
  border-radius: 50px;
  align-items: center;

  @media only screen and (max-width: 648px) {
    margin-right: 10px;
  }
`;

const SearchIcon = styled.div`
  margin: 10px;
`;

const Icon = styled.div`
  width: 25px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  @media only screen and (max-width: 648px) {
    font-size: 11px;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  margin: 10px;

  p {
    margin: 10px;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 648px) {
    display: none;
  }
`;

const SwitchTheme = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.element}; /** #1c1c1e*/
  border-radius: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    transition: 0.8s ease-out;
    background-color: #ffef00;
  }
`;

const Theme = styled.img`
  height: 25px;
`;

const Header = ({ filter, theme, toggleTheme }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <LogoContainer onClick={() => handleClick()}>
        <CatLogo>
          <Logo />
        </CatLogo>
      </LogoContainer>
      <SearchBar>
        <SearchIcon>
          <Icon>
            <SearchGlass />
          </Icon>
        </SearchIcon>
        <SearchInput
          placeholder="Search special one on this page..."
          onChange={filter}
        />
      </SearchBar>
      <HeaderItems>
        <p>America</p>
        <p>Europe</p>
        <p>Africa</p>
        <p>Asia</p>
      </HeaderItems>
      <SwitchTheme onClick={toggleTheme}>
        {theme === "dark" ? (
          <Theme src={iconSun} alt="icon-sun" />
        ) : (
          <Theme src={iconMoon} alt="icon-moon" />
        )}
      </SwitchTheme>
    </HeaderWrapper>
  );
};

export default Header;
