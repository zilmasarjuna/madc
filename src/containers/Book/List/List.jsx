import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Table, Card, Row, Col } from 'antd'

import { getBookList } from 'store/actions/Books'

import { LayoutWrapper } from 'components'

const columns = [
  {
    title: 'Kode',
    dataIndex: 'book_code',
    key: 'kode',
    render: text => text ? <Link to={`/books/${text}`}><b>{text}</b></Link> : '-',
  },
  {
    title: 'Judul',
    dataIndex: 'title',
    key: 'title',
    render: text => text || '-'
  },
  {
    title: 'Penulis',
    dataIndex: 'author',
    key: 'category',
    render: text => text || '-'
  }, 
  {
    title: 'Tahun Penerbitan',
    dataIndex: 'publication_year',
    key: 'category',
    render: text => text || '-'
  }
];

const List = ({ history, getBookList, bookList }) => {
  React.useEffect(() => {
    getBookList()
  }, []) //eslint-disable-line
  return (
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
              dataSource={bookList.data} 
              loading={bookList.loading}
              pagination={false}
            />
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default connect(
  ({ bntp: { bookList } }) => ({ bookList }),
  { getBookList }
)(List)