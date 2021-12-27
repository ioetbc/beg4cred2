import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import Icon from '../images/left-arrow.svg'
import { slide as Menu } from 'react-burger-menu'

export const Navigation = ({ secondaryNavigation, fixed }) => {
  const history = useHistory()

  const location = useLocation()
  const pagePath = location.pathname.split('/')[1]
  // var styles = {
  //   bmBurgerButton: {
  //     position: 'fixed',
  //     width: '36px',
  //     height: '30px',
  //     right: '16px',
  //     top: '16px',
  //   },
  //   bmBurgerBars: {
  //     background: 'red',
  //   },
  //   bmBurgerBarsHover: {
  //     background: '#a90000',
  //   },
  //   bmCrossButton: {
  //     height: '24px',
  //     width: '24px',
  //   },
  //   bmCross: {
  //     background: '#bdc3c7',
  //   },
  //   bmMenuWrap: {
  //     position: 'fixed',
  //     height: '100%',
  //   },
  //   bmMenu: {
  //     background: '#373a47',
  //     padding: '2.5em 1.5em 0',
  //     fontSize: '1.15em',
  //   },
  //   bmMorphShape: {
  //     fill: '#373a47',
  //   },
  //   bmItemList: {
  //     color: '#b8b7ad',
  //     padding: '0.8em',
  //   },
  //   bmItem: {
  //     display: 'inline-block',
  //   },
  //   bmOverlay: {
  //     background: 'rgba(0, 0, 0, 0.3)',
  //   },
  // }

  const websitePages = [
    {
      title: 'ABOUT/CONTACT',
      url: '/contact',
    },
    {
      title: 'LINKEDTREE',
      url: '/',
    },
    {
      title: 'TATTOOS',
      url: '/tattoos',
    },
    {
      title: 'VIDEOS',
      url: '/videos',
    },
    {
      title: 'INSTA',
      url: 'https://www.instagram.com/beg4cred/?hl=en',
    },
    {
      title: 'SHOP',
      url: 'shop?category=workIsHell',
    },
    {
      title: 'NFT',
      url: 'shop/workIsHell',
    },
  ]

  return (
    <div className={`${styles.navigation} ${fixed ? styles.fixed : ''}`}>
      <h1 className={styles.textLogo} onClick={() => history.push('/')}>
        BEG4
        <br />
        <span className={styles.bottomLogo}>CRED</span>
      </h1>
      <div className={styles.backButton} onClick={() => history.goBack()}>
        <img className={styles.backButtonIcon} src={Icon} alt="back button" />
        <p>GO BACK</p>
      </div>
      <div className={styles.menuLinksPages}>
        {websitePages.map(page => (
          <h1
            style={{
              textDecoration: page.title.toLowerCase() === pagePath && 'underline',
              // fontSize: page.title.toLowerCase() === pagePath && '26px',
            }}
            onClick={() => history.push(page.url)}
            className={styles.menuLink}
          >
            {page.title}
          </h1>
        ))}
      </div>
      {secondaryNavigation && (
        <div className={styles.leftAlignedMenuWrapper}>
          {secondaryNavigation.map(item => (
            <h2 onClick={() => history.push(item.url)} className={styles.menuLink}>
              {item.title}
            </h2>
          ))}
        </div>
      )}
    </div>
  )
}
