import React from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'

import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { VideoContent } from './content/VideoContent'

const Videos = ({ location }) => {
  const history = useHistory()

  const handleElementOnScreen = element => {
    element.style.opacity = 1
  }

  const query = qs.parse(location.search)
  const projects = VideoContent

  return (
    <>
      <div className="site-wrapper">
        <HorizontalScrollingWrapper handleElementOnScreen={handleElementOnScreen}>
          {projects?.map((video, index) => (
            <>
              <div className="image-wrapper">
                <div
                  className="video-container"
                  onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                >
                  <div className="image-index-container" index={index}>
                    <video controls src={video.url}></video>
                  </div>
                </div>
                {/* <div style={{ display: 'flex', gap: 16, justifyContent: 'end' }}>
                  <p
                    className="more-details"
                    onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                  >
                    MORE INFO
                  </p>
                  <p
                    className="more-details"
                    onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                  >
                    PURCHASE
                  </p>
                </div> */}
              </div>
            </>
          ))}
        </HorizontalScrollingWrapper>

        <Sidebar
          title={'fefefef'}
          description={'fefefe'}
          priceETH={100}
          priceFiat={100}
          stripeLink={'eef'}
          sold={true}
        />
      </div>
    </>
  )
}

export default Videos
