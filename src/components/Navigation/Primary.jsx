import React from 'react'
import styles from '../../styles/Navigation.module.css'
import { BiSubdirectoryLeft } from "react-icons/bi";

import { CloseButton } from '../CloseButton'
import { getPrimaryNavigation } from '../../utils/getNavigation'

export const Primary = ({
  showMenu,
  showSubMenu,
  setShowMenu,
  handleMenuSelection,
  handleSubPageSelection,
  handleActiveNavigation,
  handleCloseNavigation,
  handleSubMenuActiveNavigation
}) => {
  const primaryNavigation = getPrimaryNavigation()

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
                  className={styles.menuLinkPrimary}
                  style={{
                    textDecoration: handleActiveNavigation(page),
                  }}
                >
                  {page.title}
                </h1>
                {page.subPages && showSubMenu.show && showSubMenu.title === page.title && (
                  <ul>
                    
                    {page.subPages.map(subpage => (
                      <div className={styles.biSubdirectoryLeftIcon}>
                     
                      <h1
                        onClick={() => handleSubPageSelection(subpage)}
                        className={`${styles.menuLink} ${styles.subLink}`}
                        style={{
                          textDecoration: handleSubMenuActiveNavigation(subpage),
                        }}
                      >
                        {subpage.title}
                      </h1>
                      <BiSubdirectoryLeft color="white" size={15} />
                      </div>
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
