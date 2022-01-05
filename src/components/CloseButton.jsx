import React from 'react'
import styles from '../styles/CloseIcon.module.css'
import { useHistory } from 'react-router-dom'

import Icon from '../images/close-icon.svg'

export const CloseButton = ({ handleOnClick }) => {
  return (
    <div className={styles.closeIconContainer} onClick={handleOnClick}>
      <img className={styles.closeIcon} src={Icon} alt="close icon" />
    </div>
  )
}
