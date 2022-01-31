import React, { useState } from 'react'
import styles from './styles/Tattoos.module.css'
import { GlassMagnifier } from 'react-image-magnifiers'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'
import { flashSheets, tattoos } from './content/TattooImages'

const Tattoos = ({ isMobile }) => {
  const [expandMoreInfo, setExpandMoreInfo] = useState(false)
  const images = [...flashSheets, ...tattoos]
  return (
  <div className='page-wrapper-padding'>
      <div className={styles.tattooWrapper}>
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
            <div className={styles.buttonWrapper}>
            <PrimaryButton
              text="INSTA"
              handleOnClick={() => window.open('https://www.instagram.com/beg4cred/?hl=en', '_blank')}
            />
            <PrimaryButton
              text="EMAIL"
              handleOnClick={() => window.open('https://www.instagram.com/beg4cred/?hl=en', '_blank')}
            />
            </div>
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
          </div>
        </div>
        <div className={styles.hmm}>
          <div className={styles.right}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 1400: 3 }}>
              <Masonry gutter="16px">
                <h1 className={styles.title}>Flash Sheets</h1>
                {flashSheets?.map(image =>
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
                <h1 className={styles.title}>Tattoos</h1>
                {tattoos?.map(image =>
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
    </div>
  )
}

export default Tattoos
