import React, { useEffect } from 'react'
import * as qs from 'query-string'
import dayjs from 'dayjs'
import { GlassMagnifier } from 'react-image-magnifiers'
import styles from '../styles/NFTDetails.module.css'

import { NFTContent } from '../content/NFTContent'
import { PrimaryButton } from '../components/PrimaryButton'

export const NFTDetails = ({ location }) => {
  const { category, title } = qs.parse(location.search)
  const pageData = NFTContent.filter(page => page.category === category)[0].projects
  const data = pageData.filter(page => page.title === title)[0]

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'scroll'
  }, [])

  console.log(dayjs().add(5, 'days').format('dddd D MMM'))

  return (
    <>
      <div className={styles.details}>
        <h1 className={`${styles.title} ${styles.mobile}`}>{data?.title}</h1>
        <GlassMagnifier
          className={styles.image}
          imageSrc={data?.image}
          imageAlt={data?.alt}
          square={true}
          magnifierSize={200}
          magnifierBorderSize={0}
        />
        <div className={styles.transcript}>
          <h1 className={`${styles.title} ${styles.desktop}`}>{data?.title}</h1>
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
          <ul className={styles.detailsList}>
            <li>DIMENSIONS: W/20cm H/30cm</li>
            <li>PRICE: £45.00</li>
            <li>Delivered by {dayjs().add(5, 'days').format('dddd D MMMM')}</li>
          </ul>
          <PrimaryButton text="PURCHASE" url="https://www.test.bymiles.co.uk/" />
        </div>
      </div>
    </>
  )
}
