import React from 'react'
import { connect } from 'react-redux'


import { registerAccountPublisher } from 'store/actions/Publisher'

import {
  Card, 
} from 'antd'

import FormPublisher from './FormPublisher'

const CardRegisterPublisher = ({ registerAccountPublisher }) => (
  <Card bordered={false} className="card-bntp">
    <div className="title-row">
      <h3 className="title-card">Pendaftaran Penerbit</h3>
    </div>
    <div className="body-row">
      <FormPublisher onSubmit={registerAccountPublisher} />
    </div>
  </Card>
)



export default connect(
  null,
  { registerAccountPublisher }
)(CardRegisterPublisher)