import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import queryString from 'query-string'
import { GrClose } from "react-icons/gr";


import { Primary } from './Navigation/Primary'
import { Secondary } from './Navigation/Secondary'
import Icon from '../images/left-arrow.svg'
import Logo from '../images/logo.svg'
import { standardizeClassName } from '../utils/standardizeClassName'

export const Navigation = ({ location, isMobile }) => {
  const [showSubMenu, setShowSubMenu] = useState({ title: '', show: false })
  const [showMenu, setShowMenu] = useState(isMobile ? false : true)
  const history = useHistory()

  const pagePath = location.pathname.split('/')[1]
  const { pathname, search } = location
  const { title: cunt, category } = queryString.parse(search)

  const isShopPage = pathname === '/shop' || pathname === '/shop/'
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'
  const isDetailsPage = pathname === '/details' || pathname === '/details/'

  useEffect(() => {
    const pageWrapper = document.querySelector('.page-wrapper-padding')
    const shopWrapper = document.querySelector('.shop-wrapper-padding')
    console.log('pageWrapper', pageWrapper)

    if (shopWrapper) {
      if (showMenu) {
        shopWrapper.style.display = 'none'
      } else {
        shopWrapper.style.display = 'block'      
      }
    }

    if (pageWrapper) {
      if (showMenu) {
        pageWrapper.style.display = 'none'
      } else {
        pageWrapper.style.display = 'block'      
      }
    }
   
  }, [showMenu])

  const handleMenuSelection = (title, subPages = [], url, newWindow) => {
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

  const handleSubMenuActiveNavigation = page => {
    if (
      category === page.title.toLowerCase()
    ) {
      return 'underline'
    }
    return 'none'
  }

  const handleCloseNavigation = () => {
    setShowMenu(false)
  }

  const handleGoBack = () => {
    console.log('cunt', cunt)
    console.log('isShopPage', isDetailsPage)
    if (isDetailsPage) {
      return history.push(`/shop?category=${category}&position=${standardizeClassName(cunt)}`)
    }
    return history.goBack()
  }

  return (
    <div className={`${styles.navigation} ${isShopPage || isNFTPage ? styles.fixed : ''}`} onMouseLeave={() => setShowSubMenu(false)}>
      <img onClick={() => history.push('/')} className={styles.logo} src={Logo} />

      {isDetailsPage &&
        <div onClick={handleGoBack} className={styles.backButton}>
          <img className={styles.backButtonIcon} src={Icon} alt="back button" />
          <p>GO BACK</p>
        </div>
      }


      <Primary
        pathname={pathname}
        showMenu={showMenu}
        showSubMenu={showSubMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
        handleMenuSelection={handleMenuSelection}
        handleSubPageSelection={handleSubPageSelection}
        handleActiveNavigation={handleActiveNavigation}
        handleSubMenuActiveNavigation={handleSubMenuActiveNavigation}
        handleCloseNavigation={handleCloseNavigation}
      />

      <Secondary pathname={pathname} search={search} />
    </div>
  )
}
