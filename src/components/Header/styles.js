import React from "react";

import { ReactComponent as Cart } from "../../cart.svg";

export const HeaderLogo = ({ children }) => {
  return <div className="header-logo">{children}</div>;
};

export const ImgLogo = ({ logo, alt }) => {
  return <img src={logo} alt={alt} />;
};

export const SearchBar = ({ children, placeholder }) => {
  return (
    <input className="search-bar" placeholder={placeholder}>
      {children}
    </input>
  );
};

export const HeaderMenu = ({ children }) => {
  return <div className="header-menu">{children}</div>;
};

export const HeaderProfile = ({ children }) => {
  return (
    <a className="header-menu-profile" href="#">
      {children}
    </a>
  );
};

export const CartLogo = () => {
  return <Cart className="header-menu-cart" />;
};
