import React, { useEffect, useRef } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

export const HorizontalScrollingWrapper = ({ children, handleElementOnScreen }) => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const body = document.querySelector('body')
    body.style.overflow = 'hidden'

    scrollContainerRef.current.addEventListener('wheel', event => {
      event.preventDefault()
      let scrollDelta = event.deltaY + event.deltaX
      scrollContainerRef.current.scrollBy({
        left: scrollDelta,
      })
    })

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

    document.querySelectorAll('.image-index-container').forEach(img => {
      observer.observe(img)
    })
  }, [])

  return (
    <>
      <div className={styles.horizontalContainer} ref={scrollContainerRef}>
        <div className={styles.horizontalWrapper}>{children.map(item => item)}</div>
      </div>
    </>
  )
}
