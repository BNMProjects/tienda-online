import React from "react";
import PublishingCard from '../../components/PublishingCard';

import * as S from './styles';

const PublishingCardList = ({publishings}) => {
 return (
  <S.PublishingCardList >
    {publishings.map(p => {
      return <PublishingCard key={p.id} publication={p} />
    })}
  </S.PublishingCardList>
 )
}

export default PublishingCardList;
