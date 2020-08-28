import React from 'react'
import { Table, Card } from 'antd'

import { LayoutWrapper } from 'components'

const columns = [
  {
    title: 'Kode',
    dataIndex: 'kode',
    key: 'kode',
    render: text => <b>{text}</b>,
  },
  {
    title: 'Judul',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Kategori',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '#',
    dataIndex: 'result',
    key: 'result',
  }
];

const data = [
  {
    key: '1',
    kode: 'BJ002',
    title: 'Judul buku',
    category: 'Paud',
    result: 'Berhasil',
  },
  {
    key: '2',
    kode: 'BJ002',
    title: 'Judul buku',
    category: 'Paud',
    result: 'Berhasil',
  },
  {
    key: '3',
    kode: 'BJ002',
    title: 'Judul buku',
    category: 'Paud',
    result: 'Berhasil',
  },
  {
    key: '4',
    kode: 'BJ002',
    title: 'Judul buku',
    category: 'Paud',
    result: 'Berhasil',
  },
];


const List = () => (
  <LayoutWrapper>
    <div className="body">
      <div className="content-table">
        <Card bordered={false} className="card-bntp card-table">
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false}
          />
        </Card>
      </div>
    </div>
  </LayoutWrapper>
)

export default List