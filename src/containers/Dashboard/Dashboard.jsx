import React from 'react'
import { Row, Col, Card } from 'antd'

import { LayoutWrapper } from 'components'

const Dashboard = () => (
  <LayoutWrapper>
    <div className="body">
      <div className="content-first">
        <Row gutter={60}>
          <Col md={8}>
            <Card bordered={false}>
              <h5>Total buku yang didaftarkan</h5>
            </Card>
          </Col>
          <Col md={8}>
            <Card bordered={false}>
              <h5>Total buku yang dinilai</h5>
            </Card>
          </Col>
          <Col md={8}>
            <Card bordered={false}>
              <h5>Buku layak</h5>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </LayoutWrapper>
)

export default Dashboard