import React from 'react'

import {
  Card
} from 'antd'

import FormBook from './FormBook'

const CardCreateBook = () => (
  <Card bordered={false} className="card-bntp">
    <div className="title-row">
      <h3 className="title-card">Pendaftaran Buku</h3>
    </div>
    <div className="body-row">
      <FormBook />
    </div>
  </Card>
)

export default CardCreateBook