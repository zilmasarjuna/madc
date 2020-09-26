import React from 'react'

import {
  Form, Row, Col
} from 'antd'

import InputText from 'components/Form/InputText'
import InputTextarea from 'components/Form/InputTextarea'
import InputSelect from 'components/Form/InputSelect'
import InputUpload from 'components/Form/InputUpload'
import InputRadio from 'components/Form/InputRadio'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}

const FormBook = ({ onSubmit }) => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      onFinish={(val) => {
        onSubmit(val)
      }}
    >
      <Row gutter={20}>
        <Col md={12}>
          <InputText 
            label="Judul Buku"
            name="title"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Judul Buk ..."
          />
          <InputText 
            label="Nama Penulis"
            name="author"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Nama Penulis ..."
          />
          <InputText 
            label="Nama Editor"
            name="editor"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Nama Editor ..."
          />
          <InputText 
            label="Ilustrator"
            name="illustrator"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Ilustrator ..."
          />
          <InputSelect
            label="Klasifikasi"
            name="classification_id"
            rules={[{
              required: true,
              message: 'Required' 
            }]}
            options={[{ label: 'S', value: '2' }]}
            placeholder="Klasifikasi..."
          />
          <InputSelect
            label="Bidang Studi"
            name="subject_id"
            rules={[{
              required: true,
              message: 'Required' 
            }]}
            options={[{ label: 'S', value: '2' }]}
            placeholder="Bidang Studi..."
          />
          <InputText 
            label="Imprint"
            name="imprint"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Imprint ..."
          />
          <InputText 
            label="Edisi"
            name="edisi"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Edisi ..."
          />
          <InputText 
            label="Tahun Penerbit"
            name="publisher_year"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Tahun Penerbit ..."
          />
          <InputText 
            label="Jumlah halaman prelim"
            name="page_prelim"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Jumlah halaman prelim ..."
          />
          <InputText 
            label="Jumlah halaman isi"
            name="page_content"
            rules={[{
              required: true,
              message: 'Required.' 
            }]}
            placeholder="Jumlah halaman isi ..."
          />
          <InputSelect
            label="Ukuran Buku"
            name="book_size"
            rules={[{
              required: true,
              message: 'Required' 
            }]}
            options={[{ label: 'S', value: '2' }]}
            placeholder="Ukuran Buku..."
          />
          <InputSelect
            label="Warna Catatan Buku"
            name="color"
            rules={[{
              required: true,
              message: 'Required' 
            }]}
            options={[{ label: 'S', value: '2' }]}
            placeholder="Warna Catatan Buku..."
          />
          <InputRadio 
            label="Buku Ini Pernah dilakukan Penilaian"
            name="is_judged"
            rules={[{
              required: true,
              message: 'Required' 
            }]}
            options={[{ label: 'Ya', value: '1' }, { label: 'Tidak', value: '0' }]}
          />
        </Col>
        <Col md={12}>
          <Form.Item
              className="mg-0"
              shouldUpdate={(prevValues, currentValues) => prevValues.file_pdf_book !== currentValues.file_pdf_book}
            >
            {({ getFieldValue }) => {
              return (
                <InputUpload 
                  label="File PDF Buku"
                  name="file_pdf_book"
                  beforeUpload={() => false}
                  file={getFieldValue('file_pdf_book')}
                />
              )
            }}
          </Form.Item>
          <Form.Item
            className="mg-0"
            shouldUpdate={(prevValues, currentValues) => prevValues.file_pdf_book_no_identity !== currentValues.file_pdf_book_no_identity}
          >
            {({ getFieldValue }) => {
              return (
                <InputUpload 
                  label="File PDF Buku Tanpa Identitas"
                  name="file_pdf_book_no_identity"
                  beforeUpload={() => false}
                  file={getFieldValue('file_pdf_book_no_identity')}
                />
              )
            }}
          </Form.Item>
          <Form.Item
            className="mg-0"
            shouldUpdate={(prevValues, currentValues) => prevValues.aggreement_publisher !== currentValues.aggreement_publisher}
          >
            {({ getFieldValue }) => {
              return (
                <InputUpload 
                  label="Surat Perjanjian Penerbitan"
                  name="aggreement_publisher"
                  beforeUpload={() => false}
                  file={getFieldValue('aggreement_publisher')}
                />
              )
            }}
          </Form.Item>
          <Form.Item
            className="mg-0"
            shouldUpdate={(prevValues, currentValues) => prevValues.agreement_writer !== currentValues.agreement_writer}
          >
            {({ getFieldValue }) => {
              return (
                <InputUpload 
                  label="Surat Pernyataan Penulis"
                  name="agreement_writer"
                  beforeUpload={() => false}
                  file={getFieldValue('agreement_writer')}
                />
              )
            }}
          </Form.Item>
        </Col>
      </Row>
      <Row>
          <Col md={{ span: 6, offset: 18 }}>
            <button
              className="btn btn-default mt-20"
            >
              Daftar Buku
            </button>
          </Col>
        </Row>
    </Form>
  )
}

export default FormBook
