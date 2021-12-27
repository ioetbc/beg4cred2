import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

import { useHistory, useLocation, Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import { magnifyImagesOnMouseOver } from '../utils/magnifyImagesOnMouseOver'
import { getPageData } from '../utils/getPageData'

export const HorizontalScrollingWrapper = ({ handleElementOnScreen }) => {
  const scrollContainerRef = useRef(null)
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)
  const location = useLocation()
  const { path, url } = useRouteMatch()

  useEffect(() => {
    console.log('FUCK SAKE', location)
    if (!location.pathname.includes('details')) {
      setPageContent(getPageData({ location }))
    }
    // document.querySelector('#scrollTo').scrollIntoView({}) // TODO see how to find ref in different component
    setImagesHaveLoaded(false)

    scrollContainerRef.current.addEventListener('wheel', event => {
      event.preventDefault()
      let scrollDelta = event.deltaY + event.deltaX
      scrollContainerRef.current.scrollBy({
        left: scrollDelta,
      })
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleElementOnScreen(entry.target)
          }
        })
      },
      { threshold: [0.5, 1] },
    )

    if (imagesHaveLoaded) {
      document.querySelectorAll('.image').forEach((img, index) => {
        observer.observe(img)
        // magnifyImagesOnMouseOver(`magnify-${index}`, 2)
      })
    }
  }, [imagesHaveLoaded])

  const handleImageLoading = () => {
    setAmountOfImagesLoaded(amountOfImagesLoaded + 1)
    if (pageContent.length === amountOfImagesLoaded) {
      setImagesHaveLoaded(true)
    }
  }

  return (
    <>
      <div className={styles.horizontalContainer} ref={scrollContainerRef}>
        <div id="scrollTo"></div>
        <div className={styles.horizontalWrapper}>
          {pageContent?.map((NFT, index) => (
            <div className="image-wrapper">
              <Link
                to={{
                  pathname: `${url}/details/${NFT.title}`,
                  state: { details: NFT },
                }}
              >
                <img
                  className="image"
                  id={`magnify-${index}`}
                  src={NFT.image}
                  alt={NFT.alt}
                  index={index}
                  key={index}
                  onLoad={handleImageLoading}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
