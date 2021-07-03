import React from 'react';
import * as S from './styles';

const Banner = () => {
 return (
   <S.Banner >
     <S.ImgBanner 
     src="/banner-image.jpg"
     alt="Banner Image"/>
     <S.BannerDescription title="Online shop" description="Buy and Sell with us" />
   </S.Banner>
 )
}

export default Banner;