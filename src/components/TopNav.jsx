import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

export const TopNav = () => {
  const history = useHistory()

  // TODO use scss and split the files cause css file is getting massive
  // use the same transition as the sidebar
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '16px',
      top: '16px',
    },
    bmBurgerBars: {
      background: 'red',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

  // CONTACT
  // VIDEOS
  // TATTOOS
  // HOME
  // SHOP
  // ABOUT

  return (
    <>
      <div>
        <h1 className="text-logo" onClick={() => history.push('/')}>
          BEG4
          <br />
          <span className="bottom-logo">CRED</span>
        </h1>
        <div className="menu-links-pages">
          {/* <h1 className="menu-link">LINKEDTREE</h1> */}
          <h1 className="menu-link">CONTACT</h1>
          <h1 className="menu-link">VIDEOS</h1>
          <h1 className="menu-link">TATTOS</h1>
          <h1 className="menu-link">ABOUT</h1>
          <h1 className="menu-link">INSTA</h1>
          <h1 className="menu-link">SHOP</h1>
          {/* <h1 className="menu-link">NFTS</h1> */}
          {/* <h1 className="menu-link">ETSY</h1>
          <h1 className="menu-link">BEG</h1>
          <h1 className="menu-link">4CR</h1>
          <h1 className="menu-link">ED</h1> */}
        </div>
        <div className="right-aligned-menu-wrapper">
          <h2 onClick={() => history.push(`/NFT/editedAds`)} className="menu-link email">
            EDITED_ADS_NFTS
          </h2>

          <h2 onClick={() => history.push(`/NFT/pastelSet`)} className="menu-link email">
            PASTEL_SET_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/penAndInk`)} className="menu-link email">
            PEN_AND_INK_NFTS
          </h2>
          <h2 onClick={() => history.push('/NFT/workIsHell')} className="menu-link email">
            WORK_IS_HELL_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/colourCartoons`)} className="menu-link email">
            COLOUR_CARTOONS_NFTS
          </h2>
        </div>
      </div>
      {/* <div className="menu-links">
        <h1 className="menu-link about-menu">ABOUT</h1>
        <h1 className="menu-link insta">INSTA</h1>
        <h1 className="menu-link email">SHOP</h1>
        <div className="right-aligned-menu-wrapper">
          <h2 onClick={() => history.push(`/NFT/workIsHell`)} className="menu-link email">
            WORK_IS_HELL_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/penAndInk`)} className="menu-link email">
            PEN_AND_INK_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/editedAds`)} className="menu-link email">
            EDITED_ADS_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/colourCartoons`)} className="menu-link email">
            COLOUR_CARTOONS_NFTS
          </h2>
          <h2 onClick={() => history.push(`/NFT/pastelSet`)} className="menu-link email">
            PASTEL_SET_NFTS
          </h2>
        </div>
      </div> */}
      {/* <Menu className="menu-draw-container" pageWrapId={ "page-wrap" } styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
       */}
    </>
  )
}
