import React, { useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import * as qs from 'query-string'
import styles from '../styles/NFTDetails.module.css'

import { NFTContent } from '../content/NFTContent'
import { CloseButton } from '../components/CloseButton'
import { Navigation } from '../components/Navigation'

export const NFTDetails = ({ location }) => {
  const history = useHistory()
  const { category, title } = qs.parse(location.search)
  console.log('category', category)
  console.log('title', title)
  const pageData = NFTContent.filter(page => page.category === category)[0].projects
  const data = pageData.filter(page => page.title === title)[0]

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'scroll'
  }, [])

  const handleCloseButton = () => {
    history.push(`/shop?category=${location?.state?.prevPage ? location.state.prevPage : 'workIsHell'}`)
  }

  return (
    <>
      <Navigation />

      <div className={styles.aboutContactWrapper}>
        <img className={styles.image} src={data?.image} />
        <div className={styles.transcript}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p>
            On mobile the images on the left will just live in the sliding page.Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium neque esse. Seventh NFT lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </>
    // <>
    //   <Navigation secondaryNavigation={secondaryNavigation} fixed={true} />
    //   <div className="details-inner-container">
    //     <CloseButton onClick={handleCloseButton} />
    //     <div className="shit">
    //       <img src={data?.image} />
    //       <div>
    //         <h1>{data?.title}</h1>
    //         <p>{data?.description}</p>
    //         <a href={data?.stripeLink}>PURCHASE</a>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //         <h1> this is the details page</h1>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}
