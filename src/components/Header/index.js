import React from "react";

import * as S from "./styles";
import logo from "../../example-logo.png";
import { ReactComponent as Cart } from "../../cart.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="example-logo" />
      <S.SearchBar placeholder="Ingresa el nombre de tu producto"></S.SearchBar>
      <div>
        <a href="*">Profile</a>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
