import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import Home from 'pages/Home'
import Test from 'pages/Test'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const navigate = useParamNavigate()

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <button onClick={() => navigate(routes.home)}>Home</button>
      <button onClick={() => navigate(routes.test, { id: 1 })}>Test</button>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.test} element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
