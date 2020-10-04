import React, { useContext } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { AuthContext } from './Auth'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: RouteComponent, ...rest } = props
  const { authenticated, loadingAuthState } = useContext(AuthContext)

  if (loadingAuthState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: '/home', state: { prevPath: rest.path } }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
