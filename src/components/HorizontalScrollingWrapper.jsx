import React, { useEffect, useRef } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

import { magnifyImagesOnMouseOver } from '../utils/magnifyImagesOnMouseOver'

export const HorizontalScrollingWrapper = ({ children, handleElementOnScreen, imagesHaveLoaded }) => {
  const scrollContainerRef = useRef(null)
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })

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

  return (
    <>
      <div className={styles.horizontalContainer} ref={scrollContainerRef}>
        <div id="scrollTo"></div>
        <div className={styles.horizontalWrapper}>{children.map(item => item)}</div>
      </div>
    </>
  )
}
