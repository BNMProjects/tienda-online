import React from "react";

export const Aside = ({ children }) => {
  return <aside id="aside-main-menu">{children}</aside>;
};

export const Title = ({ children }) => {
  return <figcaption id="title-main-menu">{children}</figcaption>;
};

export const Menu = ({ children }) => {
  return <menu id="list-main-menu">{children}</menu>;
};

export const Item = ({ children }) => {
  return <li id="item-main-menu">{children}</li>;
};
