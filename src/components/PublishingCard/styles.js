import React from 'react';

export const PublishingCard = ({children}) => {
  return (
    <div className="publishing-card">
      {children}
    </div>
  )
}

export const PublishingCardImg = ({src, alt})=> {
  return (
    <figure className="publishing-card-img-container">
      <img className="publishing-card-img" src={src} alt={alt}/>
    </figure>
  )
}

export const PublishingCardInfo = ({children}) => {
  return (
    <div className="publishing-card-info">
      {children}
    </div>
  )
}

export const PublishingCardPrice = ({price}) => {
  return <span className="publishing-card-price">{price}</span>
}

export const PublishingCardTitle = ({title}) => {
  return <span className="publishing-card-title">{title}</span>
}

export const PublishingCardName = ({name}) => {
  return <span className="publishing-card-name">{name}</span>
}

