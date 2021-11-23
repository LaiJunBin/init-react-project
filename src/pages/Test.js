import Routes from 'components/Routes'
import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import React from 'react'
import { Route, useParams } from 'react-router-dom'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Test() {
  const { id } = useParams()
  const navigate = useParamNavigate()

  return (
    <div>
      <div>Test {id}</div>
      <div>
        <button onClick={() => navigate(routes.test.childA)}>ChildA</button>
        <button onClick={() => navigate(routes.test.childB, { id: 2 })}>
          ChildB
        </button>
      </div>
      <Routes>
        <Route exact path="/">
          <div>Test Home</div>
        </Route>
        <Route path={routes.test.childA}>
          <ChildA />
        </Route>
        <Route path={routes.test.childB}>
          <ChildB />
        </Route>
      </Routes>
    </div>
  )
}

export default Test
