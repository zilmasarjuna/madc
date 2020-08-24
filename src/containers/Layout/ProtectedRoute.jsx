import *  as React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateComponent = ({ bntp, component: Component, ...rest }) => {
  if (!bntp.auth.isAuth) {
    return (
      <Redirect 
        to={{
          pathname: '/login'
        }}
      />
    )
  }

  return (
    <Route 
      {...rest}
      render={matchProps => (
          <Component {...matchProps} />
        )
      }
    />
  )
}

export default connect(
  ({bntp}) => ({bntp}),
  null
)(PrivateComponent)