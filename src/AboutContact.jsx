import React from 'react'
import styles from './styles/AboutContact.module.css'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'

const AboutContact = () => {
  return (
    <div className={styles.details}>
      <h1 className={`${styles.title} ${styles.mobile}`}>ABOUT/CONTACT</h1>
      <video className={styles.video} controls muted autoPlay loop src={VideoFile}></video>
      <div className={styles.transcript}>
        <h1 className={`${styles.title} ${styles.desktop}`}>ABOUT/CONTACT</h1>
        <p>
          On mobile the images on the left will just live in the sliding page.Seventh NFT lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing
          elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium
          neque esse. Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.
          Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT
          lorem ipsum dolor sit amet
        </p>
        <div className={styles.buttonContainer}>
          <PrimaryButton text="EMAIL" url="https://www.test.bymiles.co.uk/" />
          <PrimaryButton text="INSTA" url="https://www.test.bymiles.co.uk/" />
        </div>
      </div>
    </div>
  )
}

export default AboutContact
