import React, { useEffect, useRef } from 'react'
import styles from '../styles/HorizontalScrolling.module.css'

export const HorizontalScrollingWrapper = ({ children, handleElementOnScreen, isMobile }) => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (!isMobile) {
      scrollContainerRef.current.addEventListener('wheel', event => {
        event.preventDefault()
        let scrollDelta = event.deltaY + event.deltaX
        scrollContainerRef.current.scrollBy({
          left: scrollDelta,
        })
      })
    }

    if(!!window.IntersectionObserver) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('entry', entry)
            handleElementOnScreen(entry.target)
          }
        })
      }, { threshold: 1 })

      document.querySelectorAll('.image-index-container').forEach(img => {
        observer.observe(img)
      })
    }
  }, [])

  return (
    <>
      <div className={styles.horizontalContainer} ref={scrollContainerRef}>
        {children.map(item => item)}
      </div>
    </>
  )
}
