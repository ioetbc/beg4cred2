import { NFTContent } from '../content/NFTContent'
import { getCurrentProject } from './getCurrentProject'

import { find } from 'lodash'

export const getPageData = ({ location }) => {
  const currentPage = getCurrentProject({ location })
  return find(NFTContent, page => page.category === currentPage).projects
}
