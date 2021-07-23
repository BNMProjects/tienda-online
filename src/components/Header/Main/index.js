import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import logo from "../../../assets/images/example-logo.png";

const Header = () => {
  return (
    <header>
      <S.HeaderLogo>
        <Link to="/">
          <S.ImgLogo logo={logo} alt={"example-logo"} />
        </Link>
      </S.HeaderLogo>
      <S.SearchBar placeholder="Ingresa el nombre de tu producto"></S.SearchBar>
      <S.HeaderMenu>
        <Link to="/user/login">
          <S.HeaderProfile>Login</S.HeaderProfile>
        </Link>
        <S.CartLogo />
      </S.HeaderMenu>
    </header>
  );
};

export default Header;
