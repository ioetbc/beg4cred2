import React from 'react'
import styles from '../../styles/Navigation.module.css'

import { CloseButton } from '../CloseButton'
import { getPrimaryNavigation } from '../../utils/getNavigation'

export const Primary = ({
  pathname,
  showMenu,
  showSubMenu,
  setShowMenu,
  handleMenuSelection,
  handleSubPageSelection,
  handleActiveNavigation,
  handleCloseNavigation,
}) => {
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'
  const primaryNavigation = getPrimaryNavigation({ isNFTPage })

  return (
    <>
      <h1 onClick={() => setShowMenu(!showMenu)} className={styles.menuMobile}>
        MENU
      </h1>
      {showMenu && (
        <div className={`${styles.menuLinksPages} ${showSubMenu ? styles.border : ''}`}>
          <CloseButton handleOnClick={handleCloseNavigation} />
          <div className={styles.list}>
            {primaryNavigation.map(page => (
              <>
                <h1
                  onClick={() => handleMenuSelection(page.title, page.subPages, page.url, page.newWindow)}
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
    </>
  )
}
