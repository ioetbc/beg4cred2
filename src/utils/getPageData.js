import { NFTContent } from '../content/NFTContent'

import * as qs from 'query-string'
import { find } from 'lodash'

export const getPageData = ({ location }) => {
  const query = qs.parse(location.search)
  const currentPage = NFTContent.filter(page => page.category === query.category)[0].category
  return find(NFTContent, page => page.category === currentPage).projects
}
