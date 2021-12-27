import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { useHistory, useLocation, useParams, Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import * as qs from 'query-string'

import { Navigation } from './components/Navigation'
import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { NFTDetails } from './pages/NFTDetails'
import { getPageData } from './utils/getPageData'
import { NFTContent } from './content/NFTContent'

const Shop = ({ location }) => {
  const history = useHistory()
  const { 0: params } = useParams()

  const { path, url } = useRouteMatch()
  const [visibleContent, setVisibleContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)
  const [showDetailsPage, setShowDetailsPafge] = useState(false)
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
            <div className="image-wrapper">
              <img
                className="image"
                id={`magnify-${index}`}
                src={NFT.image}
                alt={NFT.alt}
                index={index}
                key={index}
                onLoad={handleImageLoading}
                onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
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
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
