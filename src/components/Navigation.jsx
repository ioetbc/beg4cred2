import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'

import { Primary } from './Navigation/Primary'
import { Secondary } from './Navigation/Secondary'
import Icon from '../images/left-arrow.svg'

export const Navigation = ({ location, isMobile }) => {
  const [showSubMenu, setShowSubMenu] = useState({ title: '', show: false })
  const [showMenu, setShowMenu] = useState(isMobile ? false : true)
  const history = useHistory()

  const pagePath = location.pathname.split('/')[1]
  const { pathname, search } = location

  const isShopPage = pathname === '/shop' || pathname === '/shop/'
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'

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
    history.push(subpage.url)
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

      <Primary
        pathname={pathname}
        showMenu={showMenu}
        showSubMenu={showSubMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
        handleMenuSelection={handleMenuSelection}
        handleSubPageSelection={handleSubPageSelection}
        handleActiveNavigation={handleActiveNavigation}
        handleCloseNavigation={handleCloseNavigation}
      />

      <Secondary pathname={pathname} search={search} />
    </div>
  )
}
