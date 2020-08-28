import React from 'react'
import { Row, Col, Card } from 'antd'

import { LayoutWrapper } from 'components'

const Dashboard = () => {
  return (
    <LayoutWrapper>
      <div className="body">
        <div className="content-first">
          <Row gutter={30}>
            <Col md={8}>
              <Card bordered={false} className="card-btnp">
                <h5>Total buku yang didaftarkan</h5>

                <p className="dashboard-number">
                  1000 
                </p>
              </Card>
            </Col>
            <Col md={8}>
              <Card bordered={false}>
                <h5>Total buku yang dinilai</h5>
                <p className="dashboard-number">
                  1000 
                </p>
              </Card>
            </Col>
            <Col md={8} className="card-btnp">
              <Card bordered={false}>
                <h5>Buku layak</h5>
                <p className="dashboard-number">
                  1000 
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Dashboard