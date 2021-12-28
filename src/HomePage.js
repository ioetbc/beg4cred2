import React, { useEffect, useRef } from 'react'
import './App.css'

import { Navigation } from './components/Navigation'
import VideoFile from './videos/homepage.mp4'

const HomePage = () => {
  const videoRefOne = useRef(null)
  const videoRefTwo = useRef(null)

  return (
    <>
      <div className="video-wrapper">
        {/* <video ref={videoRefOne} controls muted autoPlay loop src={VideoFile}></video> */}
        <video
          // style={{ transform: 'scaleX(-1)' }}
          ref={videoRefTwo}
          controls
          muted
          autoPlay
          loop
          src={VideoFile}
        ></video>
        {/* <video ref={videoRefOne} controls muted autoPlay loop src={VideoFile}></video> */}
        {/* <video style={{ transform: 'scaleX(-1)' }} ref={videoRefTwo} muted autoPlay loop src={VideoFile}></video> */}
      </div>
    </>
  )
}

export default HomePage
