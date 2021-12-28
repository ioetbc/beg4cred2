import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import Icon from '../images/left-arrow.svg'
import { slide as Menu } from 'react-burger-menu'

export const Navigation = ({ secondaryNavigation, location, fixed }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const history = useHistory()
  // const location = useLocation()

  const pagePath = location.pathname.split('/')[1]

  const isShopPage = location.pathname === '/shop'

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
      subPages: [
        {
          title: 'WORK_IS_HELL_NFT',
          url: 'workIsHell',
        },
        {
          title: 'EDITED_ADS_NFT',
          url: 'editedAds',
        },
      ],
    },
    {
      title: 'NFT',
      url: 'shop/workIsHell',
    },
  ]

  const handleMenuSelection = (subPages = [], url) => {
    if (!subPages.length) return history.push(url)
    setShowSubMenu(!showSubMenu)
  }

  return (
    <div className={`${styles.navigation} ${isShopPage ? styles.fixed : ''}`}>
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
          <>
            <h1
              style={{
                textDecoration: page.title.toLowerCase() === pagePath && 'underline',
              }}
              onClick={() => handleMenuSelection(page.subPages, page.url)}
              className={styles.menuLink}
            >
              {page.title}
            </h1>
            {page.subPages && showSubMenu && (
              <ul>
                {page.subPages.map(subpage => (
                  <h1
                    style={{
                      fontSize: '12px',
                    }}
                    onClick={() => history.push(`shop?category=${subpage.url}`)}
                    className={styles.menuLink}
                  >
                    {subpage.title}
                  </h1>
                ))}
              </ul>
            )}
          </>
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
