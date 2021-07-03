import React from "react";

import * as S from "./styles";
import logo from "../../../assets/images/example-logo.png";

const Header = () => {
  return (
    <header>
      <S.HeaderLogo>
        <S.ImgLogo logo={logo} alt={"example-logo"} />
      </S.HeaderLogo>
      <S.SearchBar placeholder="Ingresa el nombre de tu producto"></S.SearchBar>
      <S.HeaderMenu>
        <S.HeaderProfile>Profile</S.HeaderProfile>
        <S.CartLogo />
      </S.HeaderMenu>
    </header>
  );
};

export default Header;
