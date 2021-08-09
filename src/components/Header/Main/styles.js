import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Cart } from "../../../assets/images/cart.svg";

export const HeaderLogo = ({ children }) => {
  return <div id="header-logo">{children}</div>;
};

export const LinkLogo = ({ path, children }) => {
  return (
    <Link id="header-logo-link" to={path}>
      {children}
    </Link>
  );
};

export const ImgLogo = ({ logo, alt }) => {
  return <img src={logo} alt={alt} />;
};

export const SearchBar = ({ children, placeholder }) => {
  return (
    <input id="search-bar" placeholder={placeholder}>
      {children}
    </input>
  );
};

export const HeaderMenu = ({ children }) => {
  return <div id="header-menu">{children}</div>;
};

export const HeaderProfile = ({ children }) => {
  return <p id="header-menu-profile">{children}</p>;
};

export const CartLogo = () => {
  return <Cart id="header-menu-cart" />;
};
