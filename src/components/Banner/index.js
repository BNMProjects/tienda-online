import React from 'react';
import * as S from './styles';

export const Banner = () => {
 return (
   <S.Banner >
     <S.ImgBanner 
     src="https://images.unsplash.com/photo-1586941963134-6486b671b809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
     alt="Banner Image"/>
     <S.BannerDescription title="Online shop" description="Buy and Sell with us" />
   </S.Banner>
 )
}