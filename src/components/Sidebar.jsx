import React from 'react'

import { PrimaryButton } from './PrimaryButton'
import styles from '../styles/Sidebar.module.css'

export const Sidebar = ({ title, description, priceETH, priceFiat, stripeLink, sold }) => {
  return (
    <div className={styles.sidebarContainer}>
      <h1 className={styles.sidebarTitle}>{title}</h1>
      <h1 className={styles.price}>{`£${priceFiat?.toFixed(2)}`}</h1>
      <PrimaryButton text={sold ? 'SOLD' : 'PURCHASE'} url="https://www.test.bymiles.co.uk/" />
      {/* <a className={styles.moreInfo}>MORE INFO</a> */}
    </div>
  )
}
