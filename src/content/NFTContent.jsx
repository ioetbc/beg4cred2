import React from 'react'

// CAN WE USE ASYNC IMPORTS SO THESE AREN'T ALL LOADED INTO THE BUNDLE
import workIsHell0 from '../images/work_is_hell/0.jpg'
import workIsHell1 from '../images/work_is_hell/1.jpg'
import workIsHell2 from '../images/work_is_hell/2.jpg'
import workIsHell3 from '../images/work_is_hell/3.jpg'
import workIsHell4 from '../images/work_is_hell/4.jpg'
import workIsHell5 from '../images/work_is_hell/5.jpg'
import workIsHell6 from '../images/work_is_hell/6.jpg'
import workIsHell7 from '../images/work_is_hell/7.jpg'
import workIsHell8 from '../images/work_is_hell/8.jpg'
import workIsHell9 from '../images/work_is_hell/9.jpg'
import workIsHell10 from '../images/work_is_hell/10.jpg'
import workIsHell11 from '../images/work_is_hell/11.jpg'

import detailedPenAndInk0 from '../images/detailed_pen_and_ink/0.jpg'
import detailedPenAndInk1 from '../images/detailed_pen_and_ink/1.jpg'
import detailedPenAndInk2 from '../images/detailed_pen_and_ink/2.jpg'
import detailedPenAndInk3 from '../images/detailed_pen_and_ink/3.jpg'
import detailedPenAndInk4 from '../images/detailed_pen_and_ink/4.jpg'
import detailedPenAndInk5 from '../images/detailed_pen_and_ink/5.jpg'
import detailedPenAndInk6 from '../images/detailed_pen_and_ink/6.jpg'
import detailedPenAndInk7 from '../images/detailed_pen_and_ink/7.jpg'

import editedAds0 from '../images/edited_ads/0.jpg'
import editedAds1 from '../images/edited_ads/1.jpg'
import editedAds2 from '../images/edited_ads/2.jpg'
import editedAds3 from '../images/edited_ads/3.jpg'
import editedAds4 from '../images/edited_ads/4.jpg'
import editedAds5 from '../images/edited_ads/5.jpg'
import editedAds6 from '../images/edited_ads/6.jpg'
import editedAds7 from '../images/edited_ads/7.jpg'
import editedAds8 from '../images/edited_ads/8.jpg'
import editedAds9 from '../images/edited_ads/9.jpg'
import editedAds10 from '../images/edited_ads/10.jpg'
import editedAds11 from '../images/edited_ads/11.jpg'
import editedAds12 from '../images/edited_ads/12.jpg'
import editedAds13 from '../images/edited_ads/13.jpg'
import editedAds14 from '../images/edited_ads/14.jpg'
import editedAds15 from '../images/edited_ads/15.jpg'
import editedAds16 from '../images/edited_ads/16.jpg'
import editedAds17 from '../images/edited_ads/17.jpg'
import editedAds18 from '../images/edited_ads/18.jpg'
import editedAds19 from '../images/edited_ads/19.jpg'
import editedAds20 from '../images/edited_ads/20.jpg'
import editedAds21 from '../images/edited_ads/21.jpg'
import editedAds22 from '../images/edited_ads/22.jpg'
import editedAds23 from '../images/edited_ads/23.jpg'
import editedAds24 from '../images/edited_ads/24.jpg'
import editedAds25 from '../images/edited_ads/25.jpg'
import editedAds26 from '../images/edited_ads/26.jpg'
import editedAds27 from '../images/edited_ads/27.jpg'

import colourCartoons0 from '../images/coloured_cartoon/0.jpg'
import colourCartoons1 from '../images/coloured_cartoon/1.jpg'
import colourCartoons2 from '../images/coloured_cartoon/2.jpg'
import colourCartoons3 from '../images/coloured_cartoon/3.jpg'
import colourCartoons4 from '../images/coloured_cartoon/4.jpg'
import colourCartoons5 from '../images/coloured_cartoon/5.jpg'
import colourCartoons6 from '../images/coloured_cartoon/6.jpg'
import colourCartoons7 from '../images/coloured_cartoon/7.jpg'
import colourCartoons8 from '../images/coloured_cartoon/8.jpg'
import colourCartoons9 from '../images/coloured_cartoon/9.jpg'
import colourCartoons10 from '../images/coloured_cartoon/10.jpg'
import colourCartoons11 from '../images/coloured_cartoon/11.jpg'

import colourFaces0 from '../images/coloured_faces/0.jpg'
import colourFaces1 from '../images/coloured_faces/1.jpg'
import colourFaces2 from '../images/coloured_faces/2.jpg'
import colourFaces3 from '../images/coloured_faces/3.jpg'
import colourFaces4 from '../images/coloured_faces/4.jpg'
import colourFaces5 from '../images/coloured_faces/5.jpg'
import colourFaces6 from '../images/coloured_faces/6.jpg'
import colourFaces7 from '../images/coloured_faces/7.jpg'

import pastelSet0 from '../images/pastel_set/0.jpg'
import pastelSet1 from '../images/pastel_set/1.jpg'
import pastelSet2 from '../images/pastel_set/2.jpg'
import pastelSet3 from '../images/pastel_set/3.jpg'
import pastelSet4 from '../images/pastel_set/4.jpg'
import pastelSet5 from '../images/pastel_set/5.jpg'
import pastelSet6 from '../images/pastel_set/6.jpg'
import pastelSet7 from '../images/pastel_set/7.jpg'
import pastelSet8 from '../images/pastel_set/8.jpg'
import pastelSet9 from '../images/pastel_set/9.jpg'
import pastelSet10 from '../images/pastel_set/10.jpg'
import pastelSet11 from '../images/pastel_set/11.jpg'
import pastelSet12 from '../images/pastel_set/12.jpg'
import pastelSet13 from '../images/pastel_set/13.jpg'

import funny0 from '../images/funny/0.jpg'
import funny1 from '../images/funny/1.jpg'
import funny2 from '../images/funny/2.jpg'
import funny3 from '../images/funny/3.jpg'
import funny4 from '../images/funny/4.jpg'
import funny5 from '../images/funny/5.jpg'
import funny6 from '../images/funny/6.jpg'
import funny7 from '../images/funny/7.jpg'
import funny8 from '../images/funny/8.jpg'

export const NFTContent = [
  {
    category: 'work_is_hell',
    projects: [
      {
        title: 'work_is_hell_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: workIsHell0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: workIsHell1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_4',
        description:
          'Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.',
        priceETH: 0.4,
        priceFiat: 40,
        sold: false,
        image: workIsHell3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_5',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: workIsHell4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_6',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: workIsHell5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell8,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_10',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell9,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_11',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell10,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'work_is_hell_12',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: workIsHell11,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'detailed_pen_and_ink',
    projects: [
      {
        title: 'pen_and_ink_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: detailedPenAndInk0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: detailedPenAndInk1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: detailedPenAndInk2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_4',
        description:
          'Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.',
        priceETH: 0.4,
        priceFiat: 40,
        sold: false,
        image: detailedPenAndInk3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_5',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: detailedPenAndInk4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_6',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: detailedPenAndInk5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: detailedPenAndInk6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pen_and_ink_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: detailedPenAndInk7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'edited_ads',
    projects: [
      {
        title: 'edited_ads_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: editedAds0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: editedAds1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_4',
        description:
          'Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.',
        priceETH: 0.4,
        priceFiat: 40,
        sold: false,
        image: editedAds3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_5',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: editedAds4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_6',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: editedAds5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds8,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_10',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds9,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_11',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds10,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_12',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds11,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_13',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds12,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_14',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds13,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_15',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds14,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_16',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds15,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_17',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds16,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_18',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds17,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_19',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds18,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_20',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds19,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_21',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds20,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_22',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds21,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_23',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds22,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_24',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds23,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_25',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds24,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_26',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds25,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_27',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds26,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'edited_ads_28',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: editedAds27,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'coloured_cartoon',
    projects: [
      {
        title: 'coloured_cartoon_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: colourCartoons0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: colourCartoons1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_4',
        description:
          'Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.',
        priceETH: 0.4,
        priceFiat: 40,
        sold: false,
        image: colourCartoons3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_5',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: colourCartoons4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_6',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: colourCartoons5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons8,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons9,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_10',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons10,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_cartoon_11',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourCartoons11,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'coloured_faces',
    projects: [
      {
        title: 'coloured_faces_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: colourFaces0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: colourFaces1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourFaces2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },

      {
        title: 'coloured_faces_4',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: colourFaces3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_5',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: colourFaces4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_6',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourFaces5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourFaces6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'coloured_faces_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: colourFaces7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'pastel_set',
    projects: [
      {
        title: 'pastel_set_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: pastelSet0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: pastelSet1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },

      {
        title: 'pastel_set_4',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: pastelSet3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_5',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: pastelSet4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_6',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet8,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_10',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet9,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_11',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet10,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_12',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet11,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_13',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet12,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'pastel_set_14',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: pastelSet13,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
  {
    category: 'funny',
    projects: [
      {
        title: 'funny_1',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: funny0,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_2',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: funny1,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_3',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: funny2,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },

      {
        title: 'funny_4',
        description:
          'Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.',
        priceETH: 0.2,
        priceFiat: 20,
        sold: true,
        image: funny3,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_5',
        description:
          'Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.',
        priceETH: 0.1,
        priceFiat: 10,
        sold: false,
        image: funny4,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_6',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: funny5,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_7',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: funny6,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_8',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: funny7,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
      {
        title: 'funny_9',
        description:
          'Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.',
        priceETH: 0.5,
        priceFiat: 50,
        sold: true,
        image: funny8,
        alt: 'NFT image',
        stripeLink:
          'https://checkout.stripe.com/pay/cs_test_a1jBtO1sMhCjF6Nu8vJiBh6hlwl4x8NTIcSfwe89KebLkH1813A5g4NZ9k#fidkdWxOYHwnPyd1blpxYHZxWmNGN3c2M2dONjdiUjJpbXRQMGdiTW5KMTU1bUBScHE3fWInKSd1aWxrbkB9dWp2YGFMYSc%2FJ3FgdnFaPERUMnFyYEBoNUBjM2R2Z0xMJyknd2BjYHd3YHcnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl',
        NFTLink: 'https://foundation.app/',
      },
    ],
  },
]
