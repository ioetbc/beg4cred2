import React, { useEffect } from 'react'
import * as qs from 'query-string'
import styles from '../styles/NFTDetails.module.css'

import { NFTContent } from '../content/NFTContent'

export const NFTDetails = ({ location }) => {
  const { category, title } = qs.parse(location.search)
  const pageData = NFTContent.filter(page => page.category === category)[0].projects
  const data = pageData.filter(page => page.title === title)[0]

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'scroll'
  }, [])

  return (
    <>
      <div className="thing">
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
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
