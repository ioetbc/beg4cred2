import React, { useState, useEffect, useRef } from 'react'
import * as qs from 'query-string'
import dayjs from 'dayjs'
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

import { GlassMagnifier } from 'react-image-magnifiers'
import styles from '../styles/NFTDetails.module.css'

import { NFTContent } from '../content/NFTContent'
import { PrimaryButton } from '../components/PrimaryButton'

export const NFTDetails = ({ location, isMobile }) => {
  const { category, title, type } = qs.parse(location.search)
  const pageData = NFTContent.filter(page => page.category === category)[0].projects
  const data = pageData.filter(page => page.title === title)[0]
  const details = useRef(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
<div className='page-wrapper-padding'>
      <div ref={details} className={styles.details}>
        <h1 className={`${styles.title} ${styles.mobile}`}>{data?.title}</h1>
        {isMobile ? (
          <img src={data?.image} alt={data?.alt} className={styles.image} />
        ) : (
          <GlassMagnifier
            className={styles.image}
            imageSrc={data?.image}
            largeImageSrc={data?.imageLarge}
            imageAlt={data?.alt}
            square={true}
            magnifierSize={200}
            magnifierBorderSize={0}
            allowOverflow={true}
          />
        )}

        <div className={styles.transcript}>
          <h1 className={`${styles.title} ${styles.desktop}`}>{data?.title}</h1>
          <ul className={styles.detailsList}>
            <li>DELIVERED BY: {<strong>{dayjs().add(5, 'days').format('dddd Do MMMM')}</strong>}</li>
            <li>
              DIMENSIONS: <strong>{data?.dimensions}</strong>
            </li>
            {data?.priceOriginal && (
              <li>
                ORIGINAL PRICE: <strong>£{data?.priceOriginal?.toFixed(2)}</strong>
              </li>
            )}
            {data?.pricePrint && (
              <li>
                PRINT PRICE: <strong>£{data?.pricePrint?.toFixed(2)}</strong>
              </li>
            )}
            {data?.NFTPrice && (
              <li>
                NFT PRICE: <strong>{data?.NFTPrice} ETH</strong>
              </li>
            )}
          </ul>
          <div className={styles.buttonWrapper}>
            {data?.priceOriginal && (
              <PrimaryButton
                text="BUY ORIGINAL"
                handleOnClick={() => window.open(data?.originalStripeLink, '_blank')}
              />
            )}
            <PrimaryButton
              text="BUY PRINT"
              handleOnClick={() => window.open(type === 'NFT' ? data?.NFTLink : data?.printStripeLink, '_blank')}
            />
            {data?.NFTPrice && (
              <PrimaryButton text="BUY NFT" handleOnClick={() => window.open(data?.stripeLink, '_blank')} />
            )}
          </div>
        </div>
      </div>
      </div>
  )
}
