import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/Tattoos.module.css'
import { GlassMagnifier } from 'react-image-magnifiers'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'
import { TattooImages } from './content/TattooImages'

const Tattoos = ({ isMobile }) => {
  const [expandMoreInfo, setExpandMoreInfo] = useState(false)
  const verticalScrollingWrapper = useRef(null)
  let globalID
  let iteration = 0
  const PADDING = 16

  const repeatOften = () => {
    iteration++
    const rightSection = verticalScrollingWrapper?.current
    if (!rightSection) return

    const galleryHeight = Math.abs(rightSection.scrollHeight - window.innerHeight + PADDING)

    if (iteration >= galleryHeight) {
      return cancelAnimationFrame(globalID)
    }

    if (iteration <= 0) {
      return (iteration = 0)
    }

    rightSection.scroll(0, iteration)
    globalID = requestAnimationFrame(repeatOften)
  }

  // useEffect(() => {
  // const rightSection = verticalScrollingWrapper?.current
  // const galleryHeight = rightSection.scrollHeight - window.innerHeight + PADDING
  // globalID = requestAnimationFrame(repeatOften)
  // rightSection.addEventListener('mouseenter', () => {
  //   cancelAnimationFrame(globalID)
  // })
  // rightSection.addEventListener('mouseleave', () => {
  //   globalID = requestAnimationFrame(repeatOften)
  // })
  // rightSection.addEventListener('wheel', () => {
  //   iteration += event.deltaY
  //   if (iteration >= galleryHeight || iteration < 0) return
  //   rightSection.style.transform = `translateY(${iteration}px`
  // })
  // }, [])

  return (
    <>
      <div className={styles.tattooWrapper}>
        <h1 className={`${styles.title} ${styles.mobile}`}>TATTOOS</h1>
        <div className={styles.left}>
          <div className={styles.videoTransWrapper}>
            <video
              className={styles.video}
              controls
              muted
              autoPlay={!isMobile}
              loop={!isMobile}
              src={`${VideoFile}#t=0.5`}
            ></video>
            <div className={styles.transcript}>
              <p className={`${styles.textContainer} ${expandMoreInfo ? styles.expand : ''}`}>
                On mobile the images on the left will just live in the sliding page.Seventh NFT lorem ipsum dolor sit
                amet consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
                consectetur adipisicing elit. Porro praesentium neque esse.
              </p>
              <p className={styles.readMore} onClick={() => setExpandMoreInfo(!expandMoreInfo)}>
                {expandMoreInfo ? 'READ LESS' : 'READ MORE'}
              </p>
            </div>
            <PrimaryButton
              style={{ marginBottom: 16 }}
              text="BOOK A TATTOO"
              handleOnClick={() => window.open('https://www.instagram.com/beg4cred/?hl=en', '_blank')}
            />
          </div>
        </div>
        <div className={styles.hmm}>
          <div ref={verticalScrollingWrapper} className={styles.right}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 1400: 3 }}>
              <Masonry gutter="16px">
                {TattooImages.map(image =>
                  isMobile ? (
                    <img src={image?.url} alt={image?.alt} className={styles.image} />
                  ) : (
                    <GlassMagnifier
                      className={styles.image}
                      imageSrc={image.url}
                      imageAlt={image.alt}
                      square={true}
                      magnifierSize={200}
                      magnifierBorderSize={0}
                    />
                  ),
                )}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tattoos
