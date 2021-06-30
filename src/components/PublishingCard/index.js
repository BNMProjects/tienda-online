import React from 'react';
import * as S from './styles';

export const PublishingCard = ({publication: p}) => {
  return (
    <S.PublishingCard >
      <S.PublishingCardImg alt={p.alt} src={p.img}/>
      <S.PublishingCardInfo>
        <S.PublishingCardPrice price={p.price}/>
        <S.PublishingCardTitle title={p.title}/>
        <S.PublishingCardName name={p.name} />
      </S.PublishingCardInfo>
    </S.PublishingCard>
  )
}