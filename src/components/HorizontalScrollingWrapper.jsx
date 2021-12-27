import React, { useEffect, useRef } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

import { magnifyImagesOnMouseOver } from '../utils/magnifyImagesOnMouseOver'

export const HorizontalScrollingWrapper = ({ children, handleElementOnScreen, imagesHaveLoaded }) => {
  const scrollContainerRef = useRef(null)
  console.log('children', children)
  useEffect(() => {
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
