import { useNavigate } from 'react-router-dom'

export const useParamNavigate = () => {
  const navigate = useNavigate()

  return (path, params = {}, options = {}) => {
    const matches = path.matchAll('/:([^/]+)')
    for (const match of matches) {
      if (!(match[1] in params)) {
        return '/404'
      }

      path = path.replace(match[0].substr(1), params[match[1]])
    }

    navigate(path, options)
  }
}
