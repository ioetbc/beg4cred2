import React from 'react'
import styles from '../styles/Button.module.css'

export const PrimaryButton = ({ text, url }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} href={url}>
        {text}
      </button>
    </div>
  )
}
