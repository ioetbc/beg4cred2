import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from '../styles/Navigation.module.css'
import Icon from '../images/left-arrow.svg'

export const LinkButton = ({ label, url, active, icon = true }) => {
    const history = useHistory()
    
  return (
    <h2
        style={{
        textDecoration: active && 'underline',
        }}
        onClick={() => history.push(url)}
        className={styles.menuLink}
    >
        <div className={styles.secondaryNavigationWrapper}>
            {label}
            {icon && <img className={styles.forwardButtonIcon} src={Icon} alt={`link to ${label}`} />}
        </div>
    </h2>
    )
}
