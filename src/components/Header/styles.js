import React from "react";

export const SearchBar = ({ children, placeholder }) => {
  return (
    <input className="search-bar" placeholder={placeholder}>
      {children}
    </input>
  );
};
