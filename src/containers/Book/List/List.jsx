import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Card, Row, Col } from 'antd'

import { LayoutWrapper } from 'components'

const columns = [
  {
    title: 'Kode',
    dataIndex: 'kode',
    key: 'kode',
    render: text => <Link to={`/books/${text}`}><b>{text}</b></Link>,
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


const List = ({ history }) => (
  <LayoutWrapper>
    <div className="body">
      <Row>
        <Col md={{ span: 4, offset: 20 }}>
          <button
            className="btn btn-default mb-20"
            onClick={() => history.push('/books/create')}
          >
            Daftar Buku
          </button>
        </Col>
      </Row>
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