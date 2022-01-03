import React from 'react'

import { PrimaryButton } from './PrimaryButton'
import styles from '../styles/Sidebar.module.css'

export const Sidebar = ({ title, priceFiat, sold }) => {
  return (
    <div className={styles.sidebarContainer}>
      {title && <h1 className={styles.sidebarTitle}>{title}</h1>}
      {priceFiat && <h1 className={styles.price}>{`£${priceFiat?.toFixed(2)}`}</h1>}
      {sold && <PrimaryButton text={sold ? 'SOLD' : 'PURCHASE'} url="https://www.test.bymiles.co.uk/" />}
    </div>
  )
}
