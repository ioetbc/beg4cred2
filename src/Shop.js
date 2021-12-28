import React, { useState, useEffect } from 'react'
import './App.css'
import { useHistory } from 'react-router-dom'
import * as qs from 'query-string'
import { GlassMagnifier } from 'react-image-magnifiers'

import { Navigation } from './components/Navigation'
import { HorizontalScrollingWrapper } from './components/HorizontalScrollingWrapper'
import { Sidebar } from './components/Sidebar'
import { getPageData } from './utils/getPageData'
import { NFTContent } from './content/NFTContent'

const Shop = ({ location }) => {
  const history = useHistory()
  const [visibleContent, setVisibleContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false)
  const [amountOfImagesLoaded, setAmountOfImagesLoaded] = useState(1)

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  useEffect(() => {
    setImagesHaveLoaded(false)

    setPageContent(getPageData({ location }))
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
  }, [location])

  const handleElementOnScreen = element => {
    const index = Number(element?.getAttribute('index'))
    setVisibleContent(getPageData({ location })[index])
  }

  const handleImageLoading = () => {
    setAmountOfImagesLoaded(amountOfImagesLoaded + 1)
    if (pageContent.length === amountOfImagesLoaded) {
      setImagesHaveLoaded(true)
    }
  }

  const query = qs.parse(location.search)
  const projects = NFTContent.filter(page => page.category === query.category)[0].projects
  const isMobile =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4),
    )
      ? true
      : false

  console.log('isMobile', isMobile)

  return (
    <>
      <div id="site-wrapper" className="site-wrapper">
        {/* <Navigation secondaryNavigation={secondaryNavigation} fixed={true} /> */}

        <HorizontalScrollingWrapper
          imagesHaveLoaded={imagesHaveLoaded}
          handleElementOnScreen={handleElementOnScreen}
          updateImagesHaveLoadedState={setImagesHaveLoaded}
        >
          {projects?.map((NFT, index) => (
            <>
              <div className="image-wrapper">
                <div
                  className="image-container"
                  onClick={() => history.push(`/details?category=${query.category}&title=${NFT.title}`)}
                >
                  {isMobile ? (
                    <img src={NFT.image} alt={NFT.alt} index={index} className="image" onLoad={handleImageLoading} />
                  ) : (
                    <GlassMagnifier
                      className="image"
                      imageSrc={NFT.image}
                      imageAlt={NFT.alt}
                      index={index}
                      square={true}
                      onImageLoad={handleImageLoading}
                      magnifierSize={200}
                      magnifierBorderSize={0}
                    />
                  )}
                </div>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'end' }}>
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
                </div>
              </div>
            </>
          ))}
        </HorizontalScrollingWrapper>

        <Sidebar
          title={visibleContent?.title}
          description={visibleContent?.description}
          priceETH={visibleContent?.priceETH}
          priceFiat={visibleContent?.priceFiat}
          stripeLink={visibleContent?.stripeLink}
          sold={visibleContent?.sold}
        />
      </div>
    </>
  )
}

export default Shop

// DEBOUNCE
// FOR THE COLOURED IMAGES CHANGE THE BG COLOUR FOR NO COLOUR KEEP BG BLACK
// ADD A LOADING STATE WHEN THE PATH CHANGE
// USE REM UNITS SO MENU DOESN'T OVERLAP IMAGES
// CHANGE THE TITLE TO THE COLLECTION NAME / INDEX
// USE WEBP
// LINK HOVER SHOULD BE SVG OF CIRCLE
// MAKE THE IMAGES FADE IN ON SCROLL IN THE HSC
// ON CLICKING THE IMAGES IN THE HSC YOU SHOULD ENTER A SUB PAGE WHICH HAS IMAGE DIMENSIONS / PRICE / DESC / BUY BUTTON ETC.
// REMOVE THE MAGNIFICATION ON THE IMAGES IN THE HSC AND ADD IT TO THE DUB PAGE
// SCROLL RESTORATION

// TATTOOS PAGE
// MAGNIFY EFFECT ON TATTOO GALLERY
// ADD A MORE INFO BUTTON ON MOBILE SO ALL THE TEXT ISN'T VISIBLE
// SLIGHT BUG WITH THE AUTO SCROLLING GALLERY
