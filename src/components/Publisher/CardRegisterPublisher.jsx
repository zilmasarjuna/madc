import React from 'react'

import {
  Card, 
} from 'antd'

import FormPublisher from './FormPublisher'

const CardRegisterPublisher = () => (
  <Card bordered={false} className="card-bntp">
    <div className="title-row">
      <h3 className="title-card">Pendaftaran Penerbit</h3>
    </div>
    <div className="body-row">
      <FormPublisher />
    </div>
  </Card>
)

export default CardRegisterPublisher