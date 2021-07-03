import React from "react";

import * as S from "./styles";
import BasicMenu from "../Basic/index";
import List from "../../List/Main/index";

import { categories, deals } from "../../../constants/examples.js";

const MainMenu = () => {
  const renderList = (item, index) => {
    return (
      <S.Item key={index}>
        <a href="*">{item}</a>
      </S.Item>
    );
  };

  const renderTitle = (title) => {
    return <S.Title>{title}</S.Title>;
  };

  return (
    <S.Aside>
      <BasicMenu renderTitle={renderTitle} title="Descuentos">
        <List
          list={deals}
          Wrapper={(elements) => <S.Menu>{elements}</S.Menu>}
          renderItem={renderList}
        />
      </BasicMenu>
      <BasicMenu renderTitle={renderTitle} title="Categorias">
        <List
          list={categories}
          Wrapper={(elements) => <S.Menu>{elements}</S.Menu>}
          renderItem={renderList}
        />
      </BasicMenu>
    </S.Aside>
  );
};

export default MainMenu;
