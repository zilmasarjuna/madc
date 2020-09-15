import React from 'react'
import { connect } from 'react-redux'

import { registerBooks } from 'store/actions/Books'

import {
  Card
} from 'antd'

import FormBook from './FormBook'

const CardCreateBook = ({ registerBooks }) => (
  <Card bordered={false} className="card-bntp">
    <div className="title-row">
      <h3 className="title-card">Pendaftaran Buku</h3>
    </div>
    <div className="body-row">
      <FormBook onSubmit={registerBooks} />
    </div>
  </Card>
)

export default connect(
  null,
  { registerBooks }
)(CardCreateBook)