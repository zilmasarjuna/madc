import React from 'react'
import { Card, Tabs } from 'antd'

const { TabPane } = Tabs

const TabJudgement = () => {
  return (
    <Card bordered={false} className="card-bntp card-tab">
      <Tabs
        defaultActiveKey="1"
      >
        <TabPane tab="Praseleksi" key="1">
          Tab Praseleksi
        </TabPane>
        <TabPane tab="Penilaian Tahap 1" key="2">
          Tab Penilaian 1
        </TabPane>
        <TabPane tab="Penilaian Tahap 2" key="3">
          Tab Penilaian 2
        </TabPane>
      </Tabs>
    </Card>
  )
}

export default TabJudgement