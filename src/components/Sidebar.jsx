import React from 'react'

import styles from '../styles/Sidebar.module.css'

export const Sidebar = ({ title, price }) => {
  return (
    <div className={styles.sidebarContainer}>
      {<h1 className={styles.price}>{price}</h1>}
      {title && <h1 className={styles.sidebarTitle}>{title}</h1>}
    </div>
  )
}
