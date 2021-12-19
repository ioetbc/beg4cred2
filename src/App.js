import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { useHistory, useLocation } from 'react-router-dom'

import { TopNav } from './components/TopNav'
import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getCurrentProject } from './utils/getCurrentProject'
import { getPageData } from './utils/getPageData'

const App = () => {
  const history = useHistory()
  const location = useLocation()
  const [visibleContent, setVisibleContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)

  useEffect(() => {
    setPageContent(getPageData({ location }))
    document.querySelector('#scrollTo').scrollIntoView({}) // TODO see how to find ref in different component
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
      <TopNav />
      <HorizontalScrollingWrapper
        imagesHaveLoaded={imagesHaveLoaded}
        nextProject={'workIsHell'}
        handleElementOnScreen={handleElementOnScreen}
        updateImagesHaveLoadedState={setImagesHaveLoaded}
      >
        {pageContent?.map((NFT, index) => (
          <div className="image-wrapper">
            <img
              onClick={() => history.push(`/NFT/${getCurrentProject({ location })}?index=${index}`)}
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

export default App

// DEBOUNCE
// DESKTOP CHANGE THE URL WHEN ITEM ON SCREEN
// HOME PAGE PAGE WITH VIDEO AND LINKS IN THE CORNERS
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// ADD A LOADING STATE WHEN THE PATH CHANGE
// USE REM UNITS SO MENU DOESNT OVERLAP IMAGES
// CHANGE THE TITLE TO THE COLLECTION NAME / INDEX
// USE WEBP
// LINK HOVER SHOULD BE SVG OF CIRCLE
// MAKE GITHUB REPO FOR THIS PROJECT

// BUGS
  // MAGNIFIER SHOWS WRONG GLASS WHEN ROUTE CHANGES
  // GET MAGNIFICATION AREA CORRECT CUTS OFF TOO QUICKLY FROM THE EDGE

