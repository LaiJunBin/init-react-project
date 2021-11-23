import Routes from 'components/Routes'
import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import Home from 'pages/Home'
import Test from 'pages/Test'
import React from 'react'
import { Route } from 'react-router-dom'

function App() {
  const navigate = useParamNavigate()

  return (
    <div className="App">
      <h1>Welcome to React Router v5!</h1>

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

export default App
