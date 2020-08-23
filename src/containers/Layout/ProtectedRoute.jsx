import *  as React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

const PrivateComponent = ({ bntp, component: Component, ...rest }, props) => {
  console.log('props',bntp)
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