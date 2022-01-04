export const getSecondaryNavigation = ({ isShopPage, isVideoPage, isNFTPage }) => {
  if (isShopPage) {
    return [
      {
        title: 'EDITED_ADS_PRINTS',
        url: '/shop/?category=edited_ads',
      },
      {
        title: 'PASTEL_SET_PRINTS',
        url: '/shop/?category=pastel_set',
      },
      {
        title: 'PEN_AND_INK_PRINTS',
        url: '/shop/?category=pen_and_ink',
      },
      {
        title: 'WORK_IS_HELL_PRINTS',
        url: '/shop?category=work_is_hell',
      },
      {
        title: 'COLOUR_CARTOONS_PRINTS',
        url: '/shop/?category=colour_cartoons',
      },
    ]
  }

  if (isNFTPage) {
    return [
      {
        title: 'EDITED_ADS_NFTS',
        url: '/nfts/?category=edited_ads',
      },
      {
        title: 'PASTEL_SET_NFTS',
        url: '/nfts/?category=pastel_Set',
      },
      {
        title: 'PEN_AND_INK_NFTS',
        url: '/nfts/?category=pen_and_ink',
      },
      {
        title: 'WORK_IS_HELL_NFTS',
        url: '/nfts?category=work_is_hell',
      },
      {
        title: 'COLOUR_CARTOONS_NFTS',
        url: '/nfts/?category=colour_cartoons',
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
