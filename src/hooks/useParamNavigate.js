import { useHistory, useRouteMatch } from 'react-router-dom'
import { cleanUrl } from 'utils'

export const useParamNavigate = () => {
  const history = useHistory()
  const { url } = useRouteMatch()

  return (path, params = {}, state = {}) => {
    const matches = path.matchAll('/:([^/]+)')
    for (const match of matches) {
      if (!(match[1] in params)) {
        return '/404'
      }

      path = path.replace(match[0].substr(1), params[match[1]])
    }
    history.push(cleanUrl(url + path), state)
  }
}
