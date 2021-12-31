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
                    <img src={NFT.image} alt={NFT.alt} index={index} className="image" onLoad={handleImageLoading} />
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

// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// CHANGE THE TITLE TO THE COLLECTION NAME / INDEX
// USE WEBP
// LINK HOVER SHOULD BE SVG OF CIRCLE
// ON CLICKING THE IMAGES IN THE HSC YOU SHOULD ENTER A SUB PAGE WHICH HAS IMAGE DIMENSIONS / PRICE / DESC / BUY BUTTON ETC.
// REMOVE THE MAGNIFICATION ON THE IMAGES IN THE HSC AND ADD IT TO THE SUB PAGE
// SCROLL RESTORATION

// TATTOOS PAGE
// MAGNIFY EFFECT ON TATTOO GALLERY
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
