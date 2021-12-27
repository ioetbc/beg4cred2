import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { NFTContent } from '../content/NFTContent'
import { CloseButton } from '../components/CloseButton'
import { getCurrentProject } from '../utils/getCurrentProject'
import { getPageData } from '../utils/getPageData'

export const NFTDetails = ({}) => {
  const history = useHistory()
  const location = useLocation()

  const { details } = location.state
  // const { details } = location?.state

  // TODO: refactor this can we use react router api?
  // const index = Number(location.search.split('index=')[1])
  // const NFT = NFTContent[0].projects[index]
  // if (!NFT) return null
  console.log('INIT')
  const handleCloseButton = () => {
    history.goBack()
  }

  return (
    <div className="details-inner-container">
      <CloseButton onClick={handleCloseButton} />
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
      <a href={details?.stripeLink}>PURCHASE</a>
      <h1> this is the details page</h1>
    </div>
    // <div className="clickable-area" onClick={handleCloseButton}></div>
  )
}
