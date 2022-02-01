import React from 'react'
import styles from '../styles/Button.module.css'

export const PrimaryButton = ({ text, handleOnClick, style, className }) => {
  return (
    <div className={styles.buttonWrapper} style={style}>
      <button className={styles.button} onClick={handleOnClick}>
        {text}
      </button>
    </div>
  )
}
