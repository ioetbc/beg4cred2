import React, { useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './styles/Tattoos.module.css'

import { Navigation } from './components/Navigation'
import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'
import { getPageData } from './utils/getPageData'
import noddyImage from './images/tattoos/noddyONe.jpeg'
import noddyImageTwo from './images/tattoos/noddyTwo.jpeg'
import noddyImageThree from './images/tattoos/noddyThree.jpeg'
import noddyImageFour from './images/tattoos/noddyFour.jpeg'
import noddyImageFive from './images/tattoos/noddyFive.jpeg'
import noddyImageSix from './images/tattoos/noddySix.jpeg'

const Tattoos = () => {
  const verticalScrollingWrapper = useRef(null)
  // const secondaryNavigation = [
  //   {
  //     title: 'EMAIL',
  //     url: '/',
  //   },
  //   {
  //     title: 'DM ON INSTAGRAM',
  //     url: '/',
  //   },
  // ]
  let globalID
  let iteration = 0
  const PADDING = 16

  const repeatOften = () => {
    iteration++
    const rightSection = verticalScrollingWrapper.current

    const galleryHeight = rightSection.scrollHeight - window.innerHeight + PADDING
    console.log('iteration', iteration)
    console.log('galleryHeight', galleryHeight)
    if (iteration >= galleryHeight) return cancelAnimationFrame(globalID)

    rightSection.style.transform = `translateY(${-iteration}px`
    globalID = requestAnimationFrame(repeatOften)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'scroll'
    const rightSection = verticalScrollingWrapper.current
    const galleryHeight = rightSection.scrollHeight - window.innerHeight + PADDING

    // globalID = requestAnimationFrame(repeatOften)
    // rightSection.addEventListener('mouseenter', function (event) {
    //   cancelAnimationFrame(globalID)
    // })
    // rightSection.addEventListener('mouseleave', function (event) {
    //   globalID = requestAnimationFrame(repeatOften)
    // })
    // rightSection.addEventListener('wheel', function (event) {
    //   iteration += event.deltaY
    //   if (iteration >= galleryHeight || iteration < 0) return
    //   rightSection.style.transform = `translateY(${iteration}px`
    // })
  }, [])

  return (
    <>
      <Navigation />

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
              <PrimaryButton text="BOOK A TATTOO" url="https://www.test.bymiles.co.uk/" />
            </div>
          </div>
        </div>
        <div ref={verticalScrollingWrapper} className={styles.right}>
          <img className={styles.image} src={noddyImage} alt={'fucl'} />
          <img className={styles.image} src={noddyImageTwo} alt={'fucl'} />
          <img className={styles.image} src={noddyImageThree} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFour} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFive} alt={'fucl'} />
          <img className={styles.image} src={noddyImageSix} alt={'fucl'} />
          <img className={styles.image} src={noddyImage} alt={'fucl'} />
          <img className={styles.image} src={noddyImageTwo} alt={'fucl'} />
          <img className={styles.image} src={noddyImageThree} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFour} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFive} alt={'fucl'} />
          <img className={styles.image} src={noddyImageSix} alt={'fucl'} />
          <img className={styles.image} src={noddyImage} alt={'fucl'} />
          <img className={styles.image} src={noddyImageTwo} alt={'fucl'} />
          <img className={styles.image} src={noddyImageThree} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFour} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFive} alt={'fucl'} />
          <img className={styles.image} src={noddyImageSix} alt={'fucl'} />
          <img className={styles.image} src={noddyImage} alt={'fucl'} />
          <img className={styles.image} src={noddyImageTwo} alt={'fucl'} />
          <img className={styles.image} src={noddyImageThree} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFour} alt={'fucl'} />
          <img className={styles.image} src={noddyImageFive} alt={'fucl'} />
          <img className={styles.image} src={noddyImageSix} alt={'fucl'} />
          <img className={styles.image} src={noddyImage} alt={'fucl'} />
        </div>
      </div>
    </>
  )
}

export default Tattoos
