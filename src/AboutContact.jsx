import React, { useEffect, useState } from 'react'
import styles from './styles/AboutContact.module.css'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'

const AboutContact = ({ isMobile }) => {
  const [expandMoreInfo, setExpandMoreInfo] = useState(false)

  return (
    <div className='page-wrapper-padding'>
    <div className={styles.details}>
      <h1 className={`${styles.title} ${styles.mobile}`}>CONTACT</h1>
      <video className={styles.video} controls muted autoPlay={!isMobile} loop src={`${VideoFile}#t=0.5`}></video>
      <div className={styles.transcript}>
        <h1 className={`${styles.title} ${styles.desktop}`}>CONTACT</h1>
        <div className={`${styles.textContainer} ${expandMoreInfo ? styles.expand : ''}`}>
          <p>
        My name is Sam Mead, I am a self-taught, independent artist, writer and musician, currently living and working in South East London.
        </p>
        <p>
        I love to make art! My life is focused around being creative as much as possible, using whichever medium appeals to me at any given time. I believe that creativity is one of the most important aspects of being a human and that art should be accessible to all. 
        </p>
        <p>
        The creative process has helped me to grow and learn throughout every period of my life and my intention as an artist, is to live creatively and inspire others to engage with their own creativity.
        </p>
        <p>
        I also believe that the role of the artist in society is one that needs to be redefined - creative people should be able to make a good living from their work, without having to compromise their ethics and without being exploited. Equally important to me as the actual artwork which I make, is to demonstrate that it is possible to thrive as an artist within, and while transforming the culture we live in.
        </p>
        <p>
        Thank you for visiting my website, please get in touch if you'd like to collaborate, ask a question, set up an interview, or visit me at my studio.
        </p>
        </div>
        <p className={styles.readMore} onClick={() => setExpandMoreInfo(!expandMoreInfo)}>
          {expandMoreInfo ? 'READ LESS' : 'READ MORE'}
        </p>
        <div className={styles.buttonContainer}>
          <PrimaryButton text="INSTA" handleOnClick={() => window.open('https://www.instagram.com/beg4cred/?hl=en', '_blank')} />
          <PrimaryButton text="EMAIL" handleOnClick={() => window.open('mailto:beg4cred@gmail.com')} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutContact
