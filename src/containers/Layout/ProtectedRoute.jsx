import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { changeMenu } from 'store/actions/Config'

const PrivateComponent = ({ auth, changeMenu, component: Component, ...rest }) => {
  useEffect(() => {
    changeMenu(rest.menu)
  })
  
  if (!auth.isAuth) {
    return (
      <Redirect 
        to={{
          pathname: '/'
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
  ({ bntp: { auth } }) => ({ auth }),
  { changeMenu }
)(PrivateComponent)