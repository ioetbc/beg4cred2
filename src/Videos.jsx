import React, { useState } from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'

import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { VideoContent } from './content/VideoContent'

const Videos = ({ location }) => {
  const [visibleContent, setVisibleContent] = useState([])
  const history = useHistory()

  const handleElementOnScreen = element => {
    element.style.opacity = 1
    const index = Number(element?.getAttribute('index'))
    setVisibleContent(VideoContent[index])
  }

  const query = qs.parse(location.search)
  const projects = VideoContent

  return (
    <div className="shop-wrapper-padding">
      <HorizontalScrollingWrapper handleElementOnScreen={handleElementOnScreen}>
        {projects?.map((video, index) => (
          <>
            <div className="video-wrapper">
              <div className="video-container">
                <div className="image-index-container" index={index}>
                  <video controls src={`${video?.url}#t=0.10`}></video>
                </div>
              </div>
              {/* <div style={{ display: 'flex', gap: 16, justifyContent: 'end' }}>
                <p className="more-details" onClick={() => console.log('open youtube')}>
                  VIEW ON YOUTUBE
                </p>
              </div> */}
            </div>
          </>
        ))}
      </HorizontalScrollingWrapper>

      <Sidebar title={visibleContent?.title} />
    </div>
  )
}

export default Videos
