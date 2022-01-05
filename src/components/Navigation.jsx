import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'
import styles from '../styles/Navigation.module.css'

import { CloseButton } from './CloseButton'
import { getSecondaryNavigation } from '../utils/getSecondaryNavigation'
import Icon from '../images/left-arrow.svg'
import Circle from '../images/circle.svg'

export const Navigation = ({ location, isMobile }) => {
  const [showSubMenu, setShowSubMenu] = useState({ title: '', show: false })
  const [showMenu, setShowMenu] = useState(isMobile ? false : true)
  const history = useHistory()

  const pagePath = location.pathname.split('/')[1]
  const { pathname, search } = location

  const isVideoPage = pathname === '/videos' || pathname === '/videos/'
  const isShopPage = pathname === '/shop' || pathname === '/shop/'
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'
  const query = qs.parse(search)

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
      newWindow: true,
    },
    {
      title: 'SHOP',
      url: 'shop?category=work_is_hell',
      subPages: [
        {
          title: 'WORK_IS_HELL_PRINTS',
          url: 'work_is_hell',
        },
        {
          title: 'EDITED_ADS_PRINTS',
          url: 'edited_ads',
        },
      ],
    },
    {
      title: 'NFT',
      url: 'NFTS?category=work_is_hell',
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
  ]

  const secondaryNavigation = getSecondaryNavigation({ isShopPage, isVideoPage, isNFTPage })

  const handleMenuSelection = (title, subPages = [], url, newWindow) => {
    console.log('title', title)
    if (!subPages.length) {
      if (isMobile) setShowMenu(false)
      setShowSubMenu(false)
      if (newWindow) {
        return window.open(url, '_blank')
      }
      return history.push(url)
    }
    setShowSubMenu({ title, show: !showSubMenu.show })
  }

  const handleSubPageSelection = subpage => {
    setShowSubMenu({ title: '', show: false })
    if (isMobile) setShowMenu(false)
    history.push(`shop?category=${subpage.url}`)
  }

  const handleActiveNavigation = page => {
    if (
      (pagePath === 'NFTS' && page.title === 'NFT') ||
      (pagePath === 'contact' && page.title === 'ABOUT/CONTACT') ||
      pagePath === page.title.toLowerCase()
    ) {
      return 'underline'
    }
    return 'none'
  }

  const handleCloseNavigation = () => {
    setShowMenu(false)
  }

  console.log('showSubMenu', showSubMenu)

  return (
    <div className={`${styles.navigation} ${isShopPage || isNFTPage ? styles.fixed : ''}`}>
      <h1 className={styles.textLogo} onClick={() => history.push('/')}>
        BEG4
        <br />
        <span className={styles.bottomLogo}>CRED</span>
      </h1>
      <div className={styles.backButton} onClick={() => history.goBack()}>
        <img className={styles.backButtonIcon} src={Icon} alt="back button" />
        <p>GO BACK</p>
      </div>
      <h1 onClick={() => setShowMenu(!showMenu)} className={styles.menuMobile}>
        MENU
      </h1>
      {showMenu && (
        <div className={`${styles.menuLinksPages} ${showSubMenu ? styles.border : ''}`}>
          <CloseButton handleOnClick={handleCloseNavigation} />
          <div className={styles.list}>
            {websitePages.map(page => (
              <>
                <h1
                  onClick={() => handleMenuSelection(page.title, page.subPages, page.url, page.newWindow)}
                  // className={`${page.title.toLowerCase() === pagePath ? styles.thing : ''}`}
                  className={styles.menuLink}
                  style={{
                    textDecoration: handleActiveNavigation(page),
                  }}
                >
                  {page.title}
                </h1>
                {page.subPages && showSubMenu.show && showSubMenu.title === page.title && (
                  <ul>
                    {page.subPages.map(subpage => (
                      <h1
                        onClick={() => handleSubPageSelection(subpage)}
                        className={`${styles.menuLink} ${styles.subLink}`}
                      >
                        {subpage.title}
                      </h1>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </div>
        </div>
      )}
      {(isShopPage || isVideoPage || isNFTPage) && (
        <div className={styles.leftAlignedMenuWrapper}>
          {secondaryNavigation.map(item => (
            <h2
              style={{
                textDecoration: item.title.toLowerCase().includes(query.category) && 'underline',
              }}
              onClick={() => history.push(item.url)}
              className={styles.menuLink}
            >
              <div className={styles.secondaryNavigationWrapper}>
                {item.title}
                <img className={styles.forwardButtonIcon} src={Icon} alt={`link to ${item.title}`} />
              </div>
            </h2>
          ))}
        </div>
      )}
    </div>
  )
}
