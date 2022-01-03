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

  const handleElementOnScreen = element => {
    element.style.opacity = 1
    const index = Number(element?.getAttribute('index'))
    setVisibleContent(getPageData({ location })[index])
  }

  const handleRouteChange = (category, title) => {
    history.push(`/details?category=${category}&title=${title}`)
  }

  const query = queryString.parse(location.search)
  const projects = NFTContent.filter(page => page.category === query.category)[0].projects

  return (
    <>
      <HorizontalScrollingWrapper handleElementOnScreen={handleElementOnScreen}>
        {projects?.map((NFT, index) => (
          <>
            <div className="image-wrapper">
              <div className="image-container" onClick={() => handleRouteChange(query.category, NFT.title)}>
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
              </div>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'end' }}>
                <p className="more-details" onClick={() => handleRouteChange(query.category, NFT.title)}>
                  MORE INFO
                </p>
                <p className="more-details" onClick={() => handleRouteChange(query.category, NFT.title)}>
                  PURCHASE
                </p>
              </div>
            </div>
          </>
        ))}
      </HorizontalScrollingWrapper>

      <Sidebar
        title={visibleContent?.title}
        description={visibleContent?.description}
        priceETH={visibleContent?.priceETH}
        priceFiat={visibleContent?.priceFiat}
        stripeLink={visibleContent?.stripeLink}
        sold={visibleContent?.sold}
      />
    </>
  )
}

export default Shop

// NEED
// FIX THE NAVIGATION ON MOBILE
// CHANGE THE TITLE TO THE COLLECTION NAME / INDEX
// LINK HOVER SHOULD BE SVG OF CIRCLE
// MAKE AN NFT PAGE WHICH IS A COPY OF THE SHOP
// TATTOO PAGE SHOULD HAVE TWO SCROLLING SECTIONS
// ADD HOVER ANIMATIONS TO LINKS (MOVE THE ARROWS)
// MAKE THE PURCHASE LINKS GO TO THE NODDY STRIPE CHECKOUT
// ADD A BETTER LOADING TRANSITION
// INSTA LINK IN THE NAVIGATION
// FIX THE ABOUT/CONTACT PAGE
// CURSOR POINTER ON THE LOGO
// ADD IN ALL THE PROJECTS TO THE SHOP PAGE
// VIDEOS ARE BLACK ON MOBILE UNTIL YOU START PLAYING THEM
// MAKE THE SHOP IMAGES THE CORRECT SIZE
// MARGIN LEFT ON THE LAST IMAGE IN THE CONTAINER
// MAKE THE SPACING IN MOBILE CORRECT

// NICE TO HAVE
// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// USE WEBP
// SCROLL RESTORATION
// MAKE THE PRODUCT PAGES SLIDE UP FROM THE BOTTOM

// TATTOOS PAGE
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
