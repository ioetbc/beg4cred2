import React from 'react'

import { PrimaryButton } from './PrimaryButton'

export const Sidebar = ({ title, description, priceETH, priceFiat, stripeLink, sold }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-info-wrapper">
        <h1 className="sidebar-title">{title}</h1>
      </div>
      <div className="sidebar-content-wrapper">
        <h1 className="sidebar-buy"></h1>
        <h1 className="sidebar-index"></h1>
        <div className="nft-info">
        <p className="sidebar-content">{description}</p>

          <div className="button-wrapper">
            <div>
              <PrimaryButton text={sold ? 'SOLD' : 'PURCHASE NFT'} url="https://www.test.bymiles.co.uk/" />
              <h1 className="sidebar-price price">{`${priceETH}/ETH`}</h1>
            </div>
            <div>
              <PrimaryButton text={sold ? 'SOLD' : 'PURCHASE PHYSICAL'} url="https://www.test.bymiles.co.uk/" />
              <h1 className="sidebar-price price">{`£${priceFiat?.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
