import React, { useEffect, useRef } from 'react'
import styles from './styles/Tattoos.module.css'
import { GlassMagnifier } from 'react-image-magnifiers'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'
import { TattooImages } from './content/TattooImages'

const Tattoos = () => {
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

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'scroll'
    const rightSection = verticalScrollingWrapper?.current
    const galleryHeight = rightSection.scrollHeight - window.innerHeight + PADDING
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
  }, [])

  return (
    <>
      <div className={styles.tattooWrapper}>
        <div className={styles.left}>
          <div className={styles.videoTransWrapper}>
            <video className={styles.video} controls muted autoPlay loop src={VideoFile}></video>
            <div className={styles.transcript}>
              <p>
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
            {TattooImages.map(image => (
              <GlassMagnifier
                className={styles.image}
                imageSrc={image.url}
                imageAlt={image.alt}
                square={true}
                magnifierSize={100}
                magnifierBorderSize={0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Tattoos
