import React from 'react'
import { connect } from 'react-redux'

import { clearCurrentUser } from 'store/actions/Auth'

const Register = ({ clearCurrentUser }) => (
  <>
    <h4>Register</h4>
    <button onClick={() => clearCurrentUser()}>Keluar</button>
  </>
)

export default connect(
  null,
  { clearCurrentUser }
)(Register)