import React from "react";
import PublishingCard from '../../components/PublishingCard';

import * as S from './styles';

export const PublishingCardList = ({publishings}) => {
 return (
  <S.PublishingCardList >
    {publishings.map(p => {
      return <PublishingCard publication={p} />
    })}
  </S.PublishingCardList>
 )
}