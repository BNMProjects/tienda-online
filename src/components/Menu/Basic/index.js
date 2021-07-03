import React from "react";

import * as S from "./styles";

const BasicMenu = ({ renderTitle, title, children }) => {
  const figcaption = renderTitle(title);

  return (
    <S.Figure>
      {figcaption}
      {children}
    </S.Figure>
  );
};

export default BasicMenu;
