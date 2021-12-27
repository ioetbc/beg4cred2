import React, { useEffect, useRef } from 'react'
import styles from './styles/AboutContact.module.css'

import { Navigation } from './components/Navigation'
import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'

const AboutContact = () => {
  return (
    <>
      <Navigation />

      <div className={styles.aboutContactWrapper}>
        <video className={styles.video} controls muted autoPlay loop src={VideoFile}></video>
        <div className={styles.transcript}>
          <p>
            On mobile the images on the left will just live in the sliding page.Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse.
          </p>
          <PrimaryButton text="EMAIL" url="https://www.test.bymiles.co.uk/" />
          <PrimaryButton text="INSTA" url="https://www.test.bymiles.co.uk/" />
        </div>
      </div>
    </>
  )
}

export default AboutContact
