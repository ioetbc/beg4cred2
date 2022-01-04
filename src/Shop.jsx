import React, { useState } from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { GlassMagnifier } from 'react-image-magnifiers'

import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getPageData } from './utils/getPageData'
import { NFTContent } from './content/NFTContent'

const Shop = ({ location, isMobile }) => {
  const history = useHistory()
  const [visibleContent, setVisibleContent] = useState([])
  const { pathname, search } = location
  const { category } = queryString.parse(location.search)
  const projects = NFTContent.filter(page => page.category === category)[0].projects
  const isNFTPage = pathname === '/NFTS' || pathname === '/NFTS/'

  const handleElementOnScreen = element => {
    element.style.opacity = 1
    const index = Number(element?.getAttribute('index'))
    const projects = getPageData({ location })[index]

    setVisibleContent({ ...projects, index: index + 1 })
  }

  const handleMoreInfoEvent = title => {
    history.push(`/details?category=${category}&title=${title}&type=${isNFTPage ? 'NFT' : 'print'}`)
  }

  const handlePurchaseEvent = title => {
    window.open('https://foundation.app/', '_blank')
  }

  return (
    <>
      <HorizontalScrollingWrapper handleElementOnScreen={handleElementOnScreen}>
        {projects?.map((NFT, index) => (
          <>
            <div className="image-wrapper">
              <div className="image-container" onClick={() => handleMoreInfoEvent(NFT.title)}>
                <div className="image-index-container" index={index}>
                  {isMobile ? (
                    <img src={NFT.image} alt={NFT.alt} index={index} className="image" />
                  ) : (
                    <GlassMagnifier
                      className="image"
                      imageSrc={NFT.image}
                      imageAlt={NFT.alt}
                      index={index}
                      square={true}
                      magnifierSize={200}
                      magnifierBorderSize={0}
                    />
                  )}
                </div>
                <div className="more-info-container">
                  <p className="more-details" onClick={() => handleMoreInfoEvent(NFT.title)}>
                    MORE INFO
                  </p>
                  <p className="more-details" onClick={() => handlePurchaseEvent(NFT.title)}>
                    PURCHASE
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </HorizontalScrollingWrapper>

      <Sidebar
        title={`${visibleContent?.index}/${getPageData({ location }).length}`}
        description={visibleContent?.description}
        priceETH={visibleContent?.priceETH}
        price={isNFTPage ? `${visibleContent?.priceETH} ETH` : `£${visibleContent?.priceFiat}`}
        stripeLink={visibleContent?.stripeLink}
        sold={visibleContent?.sold}
      />
    </>
  )
}

export default Shop

// ADD A BETTER LOADING TRANSITION
// ADD IN ALL THE PROJECTS TO THE SHOP PAGE
// MAKE THE SPACING ON MOBILE CORRECT
// ADD A MORE BUTTON TO THE SECONDARY NAV SO THAT IT DOESN'T OVERFLOW THE IMAGE AND WE CAN BRING THE IMAGE DOWN A BIT
// MAKE THE MOBILE MENU FULL WIDTH
// MAKE IT POSSIBLE TO CHANGE THE THEME ON THE HOMEPAGE USE THE SECONDARY NAVIGATION
// CONTACT PAGE IS GOOD BUT MAYBE MAKE THE VIDEO AND TEXT HIGHER ON > 1500 BP LOOKS A LITTLE LOW
// ZOOMING DOESNT WORK ON MOBILE

// NICE TO HAVE
// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// USE WEBP
// SCROLL RESTORATION
// MAKE THE PRODUCT PAGES SLIDE UP FROM THE BOTTOM
// BREADCRUMBS

// TATTOOS PAGE
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
// LINK HOVER SHOULD BE SVG OF CIRCLE
