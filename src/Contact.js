import React, { useEffect, useRef } from 'react'
import './App.css'

import { Navigation } from './components/Navigation'
import VideoFile from './videos/homepage.mp4'

const HomePage = () => {
  return (
    <>
      <div className="contact-links-wrapper">
        <ul>
          <li>
            <a href="">@beg4cred</a>
          </li>
          <li>
            <a href="">beg4cred@gmail.com</a>
          </li>
          <li>
            <a href="">07493774943</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HomePage
