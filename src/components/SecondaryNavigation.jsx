import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'
import styles from '../styles/SecondaryNavigation.module.css'

import { CloseButton } from './CloseButton'
import { getSecondaryNavigation } from '../utils/getNavigation'
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

  const primaryNavigation = getPrimaryNavigation({ isNFTPage })
  const secondaryNavigation = getSecondaryNavigation({ isShopPage, isVideoPage, isNFTPage })

  return (
    (isShopPage || isVideoPage || isNFTPage) && (
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
    )
  )
}
