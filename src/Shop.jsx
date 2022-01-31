import React, { useState, useEffect } from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

import styles from './styles/HorizontalScrolling.module.css'

import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getPageData } from './utils/getPageData'
import { NFTContent } from './content/NFTContent'
import { Secondary } from './components/Navigation/Secondary'
import { standardizeClassName } from './utils/standardizeClassName'

const Shop = ({ location, isMobile }) => {
  const history = useHistory()
  const [visibleContent, setVisibleContent] = useState([])
  const [projects, setProjects] = useState([])
  const [numberOfImagesLoaded, setnumberOfImagesLoaded] = useState(0)
  const { pathname, search } = location
  const { category, position } = queryString.parse(location.search)
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'

  useEffect(() => {
    setProjects([])
  }, [location])

  useEffect(() => {
    const projects = NFTContent.filter(page => page.category === category)[0].projects
    setProjects(projects)
    if (position && numberOfImagesLoaded === projects.length) {
      const item = document.querySelector(`.${position}`)
      item?.scrollIntoView({ inline: 'center' })
    } 
  }, [projects, numberOfImagesLoaded])

  const handleElementOnScreen = element => {
    element.style.opacity = 1
    const index = Number(element?.getAttribute('index'))
    const projects = getPageData({ location })[index]
    element.src = projects.image

    setVisibleContent({ ...projects, index: index + 1 })
  }

  const handleMoreInfoEvent = title => {
    history.push(`/details?category=${category}&title=${title}&type=${isNFTPage ? 'NFT' : 'print'}`)
  }

  const setImagesLoaded = () => {
    setnumberOfImagesLoaded(numberOfImagesLoaded + 1)
  }

  return (
<div className='shop-wrapper-padding'>
      {projects.length && (
        <HorizontalScrollingWrapper handleElementOnScreen={handleElementOnScreen} isMobile={isMobile}>
          {projects?.map((NFT, index) => (
            <>
              <div
                className={`${styles.imageContainer} ${category === 'pastel_set' ? styles.pastelSet : ''} ${
                  category === 'detailed_pen_and_ink' ? styles.detailedPenAndInk : ''} ${
                    category === 'funny' ? styles.funny : ''
                  }
                }`}
                onClick={() => handleMoreInfoEvent(NFT.title)}
              >
                <img
                  src={`/images/placeholders/${category}/${[index]}.svg`}
                  alt={NFT.alt}
                  index={index}
                  className={`image image-index-container ${standardizeClassName(NFT.title)}`}
                  loaded={false}
                  onLoad={setImagesLoaded}
                />
                <div className={styles.moreInfoContainer}>
                  <p className={styles.moreDetails} onClick={() => handleMoreInfoEvent(NFT.title)}>
                    MORE INFO
                  </p>
                </div>
              </div>
            </>
          ))}
        </HorizontalScrollingWrapper>
      )}

      <Sidebar
        title={visibleContent?.title}
        description={visibleContent?.description}
        NFTPrice={visibleContent?.NFTPrice}
        price={isNFTPage ? `${visibleContent?.NFTPrice} ETH` : `£${visibleContent?.priceOriginal || visibleContent?.pricePrint}`}
        stripeLink={visibleContent?.stripeLink}
        sold={visibleContent?.sold}
      />
      <Secondary pathname={pathname} search={search} showSecondaryNav="showSecondaryNav" />
    </div>
  )
}

export default Shop

// ADD A BETTER LOADING TRANSITION
// MAKE IT POSSIBLE TO CHANGE THE THEME ON THE HOMEPAGE USE THE SECONDARY NAVIGATION
// CONTACT PAGE IS GOOD BUT MAYBE MAKE THE VIDEO AND TEXT HIGHER ON > 1500 BP LOOKS A LITTLE LOW
// FIX MAGNIFYING GLASS
// BUG WHERE THE IMAGE DOESN'T LOAD WHEN YOU CHANGE THE PATH
// LINK HOVER SHOULD BE SVG OF CIRCLE
// ADD IN A NEXT PRINT BUTTON WHEN YOU ARE ON THE PRODUCT DETAILS PAGE (SAME STYLE AS THE LINKS IN THE SECONDARY NAV)

// NICE TO HAVE
// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// USE WEBP
// SCROLL RESTORATION
// MAKE THE PRODUCT PAGES SLIDE UP FROM THE BOTTOM
// BREADCRUMBS
// USE SRCSET
