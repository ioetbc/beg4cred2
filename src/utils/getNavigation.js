export const getPrimaryNavigation = () => {
  return [
    {
      title: 'ART SHOP',
      url: '/shop?category=work_is_hell',
      subPages: [
        {
          title: 'JOY',
          url: '/shop?category=joy',
        },
        {
          title: 'FUNNY',
          url: '/shop?category=funny',
        },
        {
          title: 'EDITED_ADS',
          url: '/shop?category=edited_ads',
        },
        {
          title: 'NIGHT_BUS',
          url: '/shop?category=night_bus',
        },
        {
          title: `MULTI_PEN`,
          url: `/shop?category=multi_pen`,
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
          title: 'A6_DRAWINGS',
          url: '/shop?category=a6_drawings',
        },
        {
          title: 'COLOURED_FACES',
          url: '/shop?category=coloured_faces',
        },
        {
          title: 'ASEMIC_WRITING',
          url: '/shop?category=asemic_writing',
        },
        {
          title: 'COLOURED_CARTOON',
          url: '/shop?category=coloured_cartoon',
        },
        {
          title: `SQUARES_AND_CIRCLES`,
          url: `/shop?category=squares_and_circles`,
        },
        {
          title: 'DETAILED_PEN_AND_INK',
          url: '/shop?category=detailed_pen_and_ink',
        },
      ],
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
      title: 'MORE',
      url: 'https://linktr.ee/BEG4CRED',
      newWindow: true,
    },
    {
      title: 'INSTA',
      url: 'https://www.instagram.com/beg4cred/?hl=en',
      newWindow: true,
    },
    {
      title: 'CONTACT',
      url: '/contact',
    },
  ]
}

export const getSecondaryNavigation = ({ isShopPage, isVideoPage, isNFTPage }) => {
  if (isShopPage || isNFTPage) {
    return [
      {
        title: `JOY`,
        url: `/shop?category=joy`,
      },
      {
        title: `FUNNY`,
        url: `/shop?category=funny`,
      },
      {
        title: `EDITED_ADS`,
        url: `/shop?category=edited_ads`,
      },
      {
        title: 'NIGHT_BUS',
        url: '/shop?category=night_bus',
      },
      {
        title: `MULTI_PEN`,
        url: `/shop?category=multi_pen`,
      },
      {
        title: `PASTEL_SET`,
        url: `/shop?category=pastel_set`,
      },
      {
        title: `WORK_IS_HELL`,
        url: `/shop?category=work_is_hell`,
      },
      {
        title: 'A6_DRAWINGS',
        url: '/shop?category=a6_drawings',
      },
      {
        title: `COLOURED_FACES`,
        url: `/shop?category=coloured_faces`,
      },
      {
        title: 'ASEMIC_WRITING',
        url: '/shop?category=asemic_writing',
      },
      {
        title: `COLOURED_CARTOON`,
        url: `/shop?category=coloured_cartoon`,
      },
      {
        title: `SQUARES_AND_CIRCLES`,
        url: `/shop?category=squares_and_circles`,
      },
      {
        title: `DETAILED_PEN_AND_INK`,
        url: `/shop?category=detailed_pen_and_ink`,
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
