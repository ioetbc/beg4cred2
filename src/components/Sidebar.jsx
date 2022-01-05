import React from 'react'

import { PrimaryButton } from './PrimaryButton'
import styles from '../styles/Sidebar.module.css'

export const Sidebar = ({ title, price }) => {
  return (
    <div className={styles.sidebarContainer}>
      {title && <h1 className={styles.sidebarTitle}>{title}</h1>}
      {<h1 className={styles.price}>{price}</h1>}
    </div>
  )
}
