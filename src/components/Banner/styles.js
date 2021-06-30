import React from 'react';

export const Banner = ({children}) => {
  return (
    <div className="banner-container">
      {children}
    </div>
  )
}

export const ImgBanner = ({ logo, alt }) => {
  return <img src={logo} alt={alt} />;
};


export const BannerDescription = ({title, description}) => {
  return (
    <div className="banner-description-container">
      <h1 className="banner-title">{title}</h1>
      <p className="banner-description">{description}</p>
    </div>
  )
}