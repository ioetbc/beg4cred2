import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NFTContent } from '../content/NFTContent'
import { CloseButton } from '../components/CloseButton'
import { getCurrentProject } from '../utils/getCurrentProject'

export const NFTDetails = ({ location }) => {
  const history = useHistory()

  // TODO: refactor this can we use react router api?
  // const index = Number(location.search.split('index=')[1])
  // const NFT = NFTContent[0].projects[index]
  // if (!NFT) return null

  const handleCloseButton = () => {
    const currentPage = getCurrentProject({ location })

    history.goBack()
  }

  return (
    <div className="details-inner-container">
      <CloseButton onClick={handleCloseButton} />
      {/* <h1>{NFT.title}</h1>
      <p>{NFT.description}</p>
      <a href={NFT.stripeLink}>PURCHASE</a> */}
      <h1> this is the details page</h1>
    </div>
    // <div className="clickable-area" onClick={handleCloseButton}></div>
  )
}
