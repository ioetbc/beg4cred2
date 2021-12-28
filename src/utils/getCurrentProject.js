import * as qs from 'query-string'

import { NFTContent } from '../content/NFTContent'

export const getCurrentProject = ({ location }) => {
  const query = qs.parse(location.search)
  const pageData = NFTContent.filter(page => page.category === query.category)[0]
  return pageData.category
}
