export const getPrimaryNavigation = () => {
  return [
    {
      title: 'ABOUT/CONTACT',
      url: '/contact',
    },
    {
      title: 'LINKTREE',
      url: 'https://linktr.ee/BEG4CRED',
      newWindow: true,
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
      title: 'SHOP',
      url: '/shop?category=work_is_hell',
      subPages: [
        {
          title: 'FUNNY',
          url: '/shop?category=funny',
        },
        {
          title: 'EDITED_ADS',
          url: '/shop?category=edited_ads',
        },
        {
          title: 'PASTEL_SET',
          url: '/shop?category=pastel_set',
        },
        {
          title: 'WORK_IS_HELL',
          url: '/shop?category=work_is_hell',
        },
        {
          title: 'COLOURED_FACES',
          url: '/shop?category=coloured_faces',
        },
        {
          title: 'COLOURED_CARTOON',
          url: '/shop?category=coloured_cartoon',
        },
        {
          title: 'DETAILED_PEN_AND_INK',
          url: '/shop?category=detailed_pen_and_ink',
        },
      ],
    },
  ]
}

export const getSecondaryNavigation = ({ isShopPage, isVideoPage, isNFTPage }) => {
  if (isShopPage || isNFTPage) {
    return [
      {
        title: `FUNNY`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=funny`,
      },
      {
        title: `EDITED_ADS`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=edited_ads`,
      },
      {
        title: `PASTEL_SET`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=pastel_set`,
      },
      {
        title: `WORK_IS_HELL`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=work_is_hell`,
      },
      {
        title: `COLOURED_FACES`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=coloured_faces`,
      },
      {
        title: `COLOURED_CARTOON`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=coloured_cartoon`,
      },
      {
        title: `DETAILED_PEN_AND_INK`,
        url: `/${isNFTPage ? 'NFTS' : 'shop'}?category=detailed_pen_and_ink`,
      },
    ]
  }

  if (isVideoPage) {
    return [
      // {
      //   title: 'FIRST_VIDEO_PROJECT',
      //   url: '/video',
      // },
      // {
      //   title: 'SECOND_VIDEO_PROJECT',
      //   url: '/video',
      // },
    ]
  }
}
