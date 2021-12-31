import React from 'react'
import './App.css'

import VideoFile from './videos/homepage.mp4'

const HomePage = () => {
  return (
    <>
      <div className="video-wrapper">
        <video
          controls
          muted
          autoPlay
          loop
          src={VideoFile}
        ></video>
      </div>
    </>
  )
}

export default HomePage
