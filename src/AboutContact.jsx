import React, { useEffect, useState } from 'react'
import styles from './styles/AboutContact.module.css'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'

const AboutContact = ({ isMobile }) => {
  const [expandMoreInfo, setExpandMoreInfo] = useState(false)

  return (
    <div className='page-wrapper-padding'>
    <div className={styles.details}>
      <h1 className={`${styles.title} ${styles.mobile}`}>ABOUT/CONTACT</h1>
      <video className={styles.video} controls muted autoPlay={!isMobile} loop src={`${VideoFile}#t=0.5`}></video>
      <div className={styles.transcript}>
        <h1 className={`${styles.title} ${styles.desktop}`}>ABOUT/CONTACT</h1>
        <p className={`${styles.textContainer} ${expandMoreInfo ? styles.expand : ''}`}>
          On mobile the images on the left will just live in the sliding page.Seventh NFT lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing
          elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium
          neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.
          Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT
          lorem ipsum dolor sit amet
        </p>
        <p className={styles.readMore} onClick={() => setExpandMoreInfo(!expandMoreInfo)}>
          {expandMoreInfo ? 'READ LESS' : 'READ MORE'}
        </p>
        <div className={styles.buttonContainer}>
          <PrimaryButton text="EMAIL" url="https://www.test.bymiles.co.uk/" />
          <PrimaryButton text="INSTA" url="https://www.test.bymiles.co.uk/" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutContact
