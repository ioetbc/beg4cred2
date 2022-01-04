import React from 'react'
import styles from './styles/HomePage.module.css'

import VideoFile from './videos/homepage.mp4'

const HomePage = () => {
  return (
    <>
      <div className={styles.video}>
        <video controls muted autoPlay loop src={`${VideoFile}#t=0.5`}></video>
      </div>
    </>
  )
}

export default HomePage
