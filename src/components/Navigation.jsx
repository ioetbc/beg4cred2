import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import Icon from '../images/left-arrow.svg'

import * as qs from 'query-string'

export const Navigation = ({ location }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const history = useHistory()

  const pagePath = location.pathname.split('/')[1]
  const isShopPage = location.pathname === '/shop' || location.pathname === '/shop/'
  const query = qs.parse(location.search)

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
      url: 'shop?category=work_is_hell',
      subPages: [
        {
          title: 'WORK_IS_HELL_NFT',
          url: 'work_is_hell',
        },
        {
          title: 'EDITED_ADS_NFT',
          url: 'edited_ads',
        },
      ],
    },
    {
      title: 'NFT',
      url: 'shop/work_is_hell',
    },
  ]

  const secondaryNavigation = [
    {
      title: 'EDITED_ADS_COLLECTION',
      url: '/shop/?category=edited_ads',
    },
    {
      title: 'PASTEL_SET_COLLECTION',
      url: '/shop/:pastelSet',
    },
    {
      title: 'PEN_AND_INK_COLLECTION',
      url: '/shop/:penAndInk',
    },
    {
      title: 'WORK_IS_HELL_COLLECTION',
      url: '/shop?category=work_is_hell',
    },
    {
      title: 'COLOUR_CARTOONS_COLLECTION',
      url: '/shop/:colourCartoons',
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
      {isShopPage && (
        <div className={styles.leftAlignedMenuWrapper}>
          {secondaryNavigation.map(item => (
            <h2
              style={{
                textDecoration: item.title.toLowerCase().includes(query.category) && 'underline',
              }}
              onClick={() => history.push(item.url)}
              className={styles.menuLink}
            >
              {item.title}
            </h2>
          ))}
        </div>
      )}
    </div>
  )
}
