import React, { useState, useEffect } from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'
import { GlassMagnifier } from 'react-image-magnifiers'

import { Navigation } from './components/Navigation'
import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getPageData } from './utils/getPageData'
import { NFTContent } from './content/NFTContent'

const Shop = ({ location }) => {
  const history = useHistory()
  const [visibleContent, setVisibleContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)
  const secondaryNavigation = [
    {
      title: 'EDITED_ADS_COLLECTION',
      url: '/shop/?category=editedAds',
    },
    {
      title: 'PASTEL_SET_COLLECTION',
      url: '/shop/:pastelSet',
    },
    {
      title: 'PEN_AND_INK_COLLECTION',
      url: '/shop/:penAndInk',
    },
    {
      title: 'WORK_IS_HELL_COLLECTION',
      url: '/shop?category=workIsHell',
    },
    {
      title: 'COLOUR_CARTOONS_COLLECTION',
      url: '/shop/:colourCartoons',
    },
  ]

  useEffect(() => {
    setImagesHaveLoaded(false)

    setPageContent(getPageData({ location }))
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
  }, [location])

  const handleElementOnScreen = element => {
    const index = Number(element?.getAttribute('index'))
    setVisibleContent(getPageData({ location })[index])
  }

  const handleImageLoading = () => {
    setAmountOfImagesLoaded(amountOfImagesLoaded + 1)
    if (pageContent.length === amountOfImagesLoaded) {
      setImagesHaveLoaded(true)
    }
  }

  const query = qs.parse(location.search)
  const pageData = NFTContent.filter(page => page.category === query.category)[0]
  const projects = pageData.projects

  return (
    <>
      <div id="site-wrapper" className="site-wrapper">
        <Navigation secondaryNavigation={secondaryNavigation} fixed={true} />

        <HorizontalScrollingWrapper
          imagesHaveLoaded={imagesHaveLoaded}
          handleElementOnScreen={handleElementOnScreen}
          updateImagesHaveLoadedState={setImagesHaveLoaded}
        >
          {projects?.map((NFT, index) => (
            <>
              <div className="image-wrapper">
                <div
                  className="image-container"
                  onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                >
                  <GlassMagnifier
                    className="image"
                    imageSrc={NFT.image}
                    imageAlt={NFT.alt}
                    index={index}
                    square={true}
                    onImageLoad={handleImageLoading}
                    magnifierSize={200}
                    magnifierBorderSize={0}
                  />
                </div>
                <p
                  className="more-details"
                  onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                >
                  MORE INFO
                </p>
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
      </div>
    </>
  )
}

export default Shop

// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// ADD A LOADING STATE WHEN THE PATH CHANGE
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// CHANGE THE TITLE TO THE COLLECTION NAME / INDEX
// USE WEBP
// LINK HOVER SHOULD BE SVG OF CIRCLE
// MAKE THE IMAGES FADE IN ON SCROLL IN THE HSC
// ON CLICKING THE IMAGES IN THE HSC YOU SHOULD ENTER A SUB PAGE WHICH HAS IMAGE DIMENSIONS / PRICE / DESC / BUY BUTTON ETC.
// REMOVE THE MAGNIFICATION ON THE IMAGES IN THE HSC AND ADD IT TO THE DUB PAGE
// SCROLL RESTORATION

// TATTOOS PAGE
// MAGNIFY EFFECT ON TATTOO GALLERY
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
