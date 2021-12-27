import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { useHistory, useLocation, Switch, Route, useRouteMatch } from 'react-router-dom'

import { Navigation } from './components/Navigation'
import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getCurrentProject } from './utils/getCurrentProject'
import { getPageData } from './utils/getPageData'

const Shop = () => {
  const history = useHistory()
  const location = useLocation()
  const { path, url } = useRouteMatch()

  const [visibleContent, setVisibleContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)
  const secondaryNavigation = [
    {
      title: 'EDITED_ADS_COLLECTION',
      url: '/shop/editedAds',
    },
    {
      title: 'PASTEL_SET_COLLECTION',
      url: '/shop/pastelSet',
    },
    {
      title: 'PEN_AND_INK_COLLECTION',
      url: '/shop/penAndInk',
    },
    {
      title: 'WORK_IS_HELL_COLLECTION',
      url: '/shop/workIsHell',
    },
    {
      title: 'COLOUR_CARTOONS_COLLECTION',
      url: '/shop/colourCartoons',
    },
  ]

  useEffect(() => {
    setPageContent(getPageData({ location }))
    // document.querySelector('#scrollTo').scrollIntoView({}) // TODO see how to find ref in different component
    setImagesHaveLoaded(false)
  }, [location])

  const handleElementOnScreen = element => {
    const index = Number(element?.getAttribute('index'))
    setVisibleContent(getPageData({ location })[index])
  }

  const handleImageLoading = () => {
    setAmountOfImagesLoaded(amountOfImagesLoaded + 1)
    console.log('pageContent.length', pageContent.length)
    if (pageContent.length === amountOfImagesLoaded) {
      setImagesHaveLoaded(true)
    }
  }

  return (
    <div id="site-wrapper" className="site-wrapper">
      <Navigation secondaryNavigation={secondaryNavigation} fixed={true} />
      <HorizontalScrollingWrapper
        imagesHaveLoaded={imagesHaveLoaded}
        nextProject={'workIsHell'}
        handleElementOnScreen={handleElementOnScreen}
        updateImagesHaveLoadedState={setImagesHaveLoaded}
      >
        {pageContent?.map((NFT, index) => (
          <div className="image-wrapper">
            <img
              onClick={() => history.push(`${url}/rendering`)}
              className="image"
              id={`magnify-${index}`}
              src={NFT.image}
              alt={NFT.alt}
              index={index}
              key={index}
              onLoad={handleImageLoading}
            />
          </div>
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
// ADD BREADCRUMBS TO PAGES
// MAKE THE IMAGES FADE IN ON SCROLL IN THE HSC
// ON CLICKING THE IMAGES IN THE HSC YOU SHOULD ENTER A SUB PAGE WHICH HAS IMAGE DIMENSIONS / PRICE / DESC / BUY BUTTON ETC.
// REMOVE THE MAGNIFICATION ON THE IMAGES IN THE HSC AND ADD IT TO THE DUB PAGE ^^

// BUGS
// MAGNIFIER SHOWS WRONG GLASS WHEN ROUTE CHANGES
// GET MAGNIFICATION AREA CORRECT CUTS OFF TOO QUICKLY FROM THE EDGE

// TATTOOS PAGE
// MAGNIFY EFFECT ON TATTOO GALLERY
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// MAKE THE GALLERY AUTOMATICALLY SCROLL BUT ALSO ABLE TO SCROLL IT YOURSELF
