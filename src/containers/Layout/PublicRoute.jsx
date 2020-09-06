import *  as React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicComponent = ({ bntp, component: Component, ...rest }) => {
  console.log('ajalan')
  if (bntp.auth.isAuth) {
    return (
      <Redirect 
        to={{
          pathname: '/dashboard'
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
)(PublicComponent)