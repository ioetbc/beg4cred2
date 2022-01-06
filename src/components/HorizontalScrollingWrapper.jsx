import React, { useEffect, useRef } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

export const HorizontalScrollingWrapper = ({ children, handleElementOnScreen, isMobile }) => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // const vh = window.innerHeight * 0.01
    // document.documentElement.style.setProperty('--vh', `${vh}px`)

    // const body = document.querySelector('body')
    // body.style.overflow = 'hidden'

    if (!isMobile) {
      scrollContainerRef.current.addEventListener('wheel', event => {
        event.preventDefault()
        let scrollDelta = event.deltaY + event.deltaX
        scrollContainerRef.current.scrollBy({
          left: scrollDelta,
        })
      })
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          handleElementOnScreen(entry.target)
          observer.unobserve(entry.target)
        }
      })
    })

    document.querySelectorAll('.image-index-container').forEach(img => {
      observer.observe(img)
    })
  }, [])

  return (
    <>
      <div className={styles.horizontalContainer} ref={scrollContainerRef}>
        {children.map(item => item)}
      </div>
    </>
  )
}
