export const getSecondaryNavigation = ({ isShopPage, isVideoPage, isNFTPage }) => {
  if (isShopPage || isNFTPage) {
    return [
      {
        title: `EDITED_ADS_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}/?category=edited_ads`,
      },
      {
        title: `PASTEL_SET_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=pastel_set`,
      },
      {
        title: `WORK_IS_HELL_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=work_is_hell`,
      },
      {
        title: `COLOURED_FACES_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: '/shop/?category=coloured_faces',
      },
      {
        title: `COLOURED_CARTOON_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: '/shop/?category=coloured_cartoon',
      },
      {
        title: `DETAILED_PEN_AND_INK_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}/?category=detailed_pen_and_ink`,
      },
    ]
  }

  if (isVideoPage) {
    return [
      {
        title: 'FIRST_VIDEO_PROJECT',
        url: '/video',
      },
      {
        title: 'SECOND_VIDEO_PROJECT',
        url: '/video',
      },
    ]
  }
}

export const getPrimaryNavigation = ({ isNFTPage }) => {
  return [
    {
      title: 'ABOUT/CONTACT',
      url: '/contact',
    },
    {
      title: 'LINKEDTREE',
      url: '/',
    },
    {
      title: 'TATTOOS',
      url: '/tattoos',
    },
    {
      title: 'VIDEOS',
      url: '/videos',
    },
    {
      title: 'INSTA',
      url: 'https://www.instagram.com/beg4cred/?hl=en',
      newWindow: true,
    },
    {
      title: `${isNFTPage ? 'NFT' : 'SHOP'}`,
      url: `${isNFTPage ? 'NFTS' : 'SHOP'}?category=work_is_hell`,
      subPages: [
        {
          title: `EDITED_ADS_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'edited_ads',
        },
        {
          title: `PASTEL_SET_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'pastel_set',
        },
        {
          title: `WORK_IS_HELL_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'work_is_hell',
        },
        {
          title: `COLOURED_FACES  _${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'coloured_faces',
        },
        {
          title: `COLOURED_CARTOON_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'coloured_cartoon',
        },
        {
          title: `DETAILED_PEN_AND_INK_${isNFTPage ? 'NFTS' : 'PRINTS'}`,
          url: 'detailed_pen_and_ink',
        },
      ],
    },
  ]
}
