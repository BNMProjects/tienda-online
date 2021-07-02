import React from 'react';
import * as S from './styles';

const PublishingCard = ({publication: {alt, img, price, title, name}}) => {

  return (
    <S.PublishingCard >
      <S.PublishingCardImg alt={alt} src={img}/>
      <S.PublishingCardInfo>
        <S.PublishingCardPrice price={price}/>
        <S.PublishingCardTitle title={title}/>
        <S.PublishingCardName name={name} />
      </S.PublishingCardInfo>
    </S.PublishingCard>
  )
}
