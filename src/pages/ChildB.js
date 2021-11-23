import Routes from 'components/Routes'
import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Home from './Home'
import Test from './Test'

function ChildB() {
  const { id } = useParams()
  const navigate = useParamNavigate()
  return (
    <div>
      <div>ChildB {id}</div>
      <div>
        <button onClick={() => navigate(routes.home)}>Home</button>
        <button onClick={() => navigate(routes.test.index, { id: 1 })}>
          Test
        </button>
      </div>
      <Routes>
        <Route path={routes.home} exact>
          <Home />
        </Route>
        <Route path={routes.test.index}>
          <Test />
        </Route>
      </Routes>
    </div>
  )
}

export default ChildB
