import React from 'react'
import Icon from '../images/close-icon.svg'

export const CloseButton = ({ onClick }) => {
  return (
    <div className="close-icon-container" onClick={onClick}>
      <img onClick={onClick} className="close-icon" src={Icon} alt="close icon" />
    </div>
  )
}
