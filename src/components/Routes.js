import React from 'react'
import { cleanUrl } from 'utils'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

function Routes({ children }) {
  const { path } = useRouteMatch()

  return (
    <Switch>
      {children.map((route, i) => {
        return (
          <Route
            key={i}
            {...route.props}
            path={cleanUrl(path + route.props.path)}
          >
            {route.props.children}
          </Route>
        )
      })}
    </Switch>
  )
}

export default Routes
