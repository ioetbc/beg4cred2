import { NFTContent } from '../content/NFTContent'

export const getCurrentProject = ({ location }) => {
  const currentPage = location.pathname.split('NFT/')[1]
  const pageData = NFTContent.filter(page => page.category === currentPage)[0]
  return pageData.category
}
