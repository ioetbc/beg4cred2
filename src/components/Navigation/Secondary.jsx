import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../../styles/Navigation.module.css'
import * as qs from 'query-string'

import { getSecondaryNavigation } from '../../utils/getNavigation'
import Icon from '../../images/left-arrow.svg'

export const Secondary = ({ pathname, search, showSecondaryNav }) => {
  const query = qs.parse(search)
  const history = useHistory()

  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'
  const isShopPage = pathname === '/shop' || pathname === '/shop/'
  const isVideoPage = pathname === '/videos' || pathname === '/videos/'

  const secondaryNavigation = getSecondaryNavigation({ isShopPage, isVideoPage, isNFTPage })

  return (
    (isShopPage || isVideoPage || isNFTPage) && (
      <div className={`${styles.leftAlignedMenuWrapper} ${showSecondaryNav ? styles.showSecondaryNav : ''}`}>
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
