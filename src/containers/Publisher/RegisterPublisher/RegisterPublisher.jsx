import React from 'react'
import { connect } from 'react-redux'

import { Alert } from 'antd'

import { LayoutWrapper, CardRegisterPublisher } from 'components'

const RegisterPublisher = ({ auth }) => (
  <LayoutWrapper>
    <div className="body">
      <div className="content">
        {/* {
          auth.data.Publisher.id === 0 && <Alert message="Anda belum memiliki profile penerbit. Silahkan isi terlebih dahulu" type="warning" />
        } */}
        <CardRegisterPublisher />
      </div>
    </div>
  </LayoutWrapper>
)

export default connect(
({ bntp: { auth }}) => ({ auth }),
  null
)(RegisterPublisher)