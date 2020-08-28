import React from 'react'

import { Card, Row, Col } from 'antd'

import { 
  LayoutWrapper, ProfileBook,
  TabJudgement
} from 'components'

const Detail = () => {
  return (
    <LayoutWrapper>
      <div className="body">
        <Row>
          <Col md={7}>
            <ProfileBook />
          </Col>
          <Col md={18}>
            <TabJudgement />
          </Col>
        </Row>
      </div>
    </LayoutWrapper>
  )
}

export default Detail