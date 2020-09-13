import React from 'react'

import {  
  Form, Button, Input,
  Row, Col,
} from 'antd'

import InputText from 'components/Form/InputText'
import InputTextarea from 'components/Form/InputTextarea'
import InputSelect from 'components/Form/InputSelect'
import InputUpload from 'components/Form/InputUpload'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}

const FormPublisher = () => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{
        pic: [{
            id: 1,
            name: '',
            phone: '',
            email: '',
            title: ''
          }, {
            id: 2,
            name: '',
            phone: '',
            email: '',
            title: ''
          }],
        surat_pernyataan: null
      }}
      onFinish={(val) => {
        console.log(val)
      }}
    >
      <Row gutter={20}>
        <Col md={12}>
          <InputText 
            label="Nama Penerbit"
            name="name"
            rules={[{
              required: true,
              message: 'Please input your name' 
            }]}
            placeholder="Nama penerbit ..."
          />
          <InputText 
            label="Email "
            name="email"
            rules={[{
              required: true,
              message: 'Please input your email' 
            }]}
            placeholder="Email ..."
          />
          <InputText 
            label="No. Handphone"
            name="phone"
            rules={[{
              required: true,
              message: 'Please input your phone' 
            }]}
            placeholder="No Handphone ..."
          />
          <Row gutter={10}>
            <Col md={12}>
              <InputSelect
                label="Province"
                name="province"
                rules={[{
                  required: true,
                  message: 'Please input your province' 
                }]}
                options={[{ label: 'S', value: '2' }]}
                placeholder="Provinsi..."
              />
            </Col>
            <Col md={12}>
              <InputSelect
                label="City"
                name="city"
                rules={[{
                  required: true,
                  message: 'Please input your province' 
                }]}
                options={[{ label: 'S', value: '2' }, { label: '2', value: '4' }, { label: '3', value: '3' }]}
                placeholder="City..."
              />
            </Col>
          </Row>
          
          <InputTextarea
            label="Alamat"
            name="address"
            rules={[{
              required: true,
              message: 'Please input your name' 
            }]}
            placeholder="Alamat lengkap ..."
          />
        </Col>
        <Col md={12}>
          <InputText 
            label="Nama Direktur"
            name="director_name"
            rules={[{
              required: true,
              message: 'Please input your email' 
            }]}
            placeholder="Nama Direktur ..."
          />
          <InputText 
            label="No. Handphone Direktur"
            name="director_phone"
            rules={[{
              required: true,
              message: 'Please input your email' 
            }]}
            placeholder="No. Handphone Direktur ..."
          />
          <InputText 
            label="Email Direktur"
            name="director_email"
            rules={[{
              required: true,
              message: 'Please input your email' 
            }]}
            placeholder="Email Direktur ..."
          />
          <InputTextarea
            label="Alamat kantor"
            name="head_office"
            rules={[{
              required: true,
              message: 'Please input your name' 
            }]}
            placeholder="Alamat lengkap kantor ..."
          />
        </Col>
      </Row>
      <Row>
        <Col md={24}><hr /></Col>
      </Row>
      <Row gutter={20}>
        <Col md={12}>
          <Form.List name="pic">
            {
              (fields, {add, remove}) => {
                return (
                  <Row gutter={20}>
                    {
                      fields.map((field, id) => (
                        <div key={field.key}>
                          <Col md={24}>
                            <div className="title-row">
                              <Row>
                                <Col md={12}>
                                  <h3 className="title-card title-left">Person {id + 1}</h3>
                                </Col>
                                <Col md={12}>
                                  <button 
                                    type="button" 
                                    className="btn btn-tertiary btn-delete-right"
                                    onClick={() => remove(field.name)}
                                  >
                                      Delete
                                  </button>
                                </Col>
                              </Row>
                            </div>
                            <Row gutter={20}>
                              <Col md={12}>
                                <InputText
                                  {...field}
                                  label="Nama"
                                  name={[field.name, 'name']}
                                  fieldKey={[field.fieldKey, 'name']}
                                  rules={[{
                                    required: true,
                                    message: 'Please input your email' 
                                  }]}
                                  placeholder="Email Direktur ..."
                                />
                              </Col>
                              <Col md={12}>
                                <InputText
                                  {...field}
                                  label="No. Handphone"
                                  name={[field.name, 'phone']}
                                  fieldKey={[field.fieldKey, 'phone']}
                                  rules={[{
                                    required: true,
                                    message: 'Please input no handphone' 
                                  }]}
                                  placeholder="No. Handphone ..."
                                />
                              </Col>
                              <Col md={12}>
                                <InputText
                                  {...field}
                                  label="Email"
                                  name={[field.name, 'email']}
                                  fieldKey={[field.fieldKey, 'email']}
                                  rules={[{
                                    required: true,
                                    message: 'Please input email' 
                                  }]}
                                  placeholder="Email ..."
                                />
                              </Col>
                              <Col md={12}>
                                <InputText
                                  {...field}
                                  label="Jabatan"
                                  name={[field.name, 'title']}
                                  fieldKey={[field.fieldKey, 'title']}
                                  rules={[{
                                    required: true,
                                    message: 'Please input jabatan' 
                                  }]}
                                  placeholder="Jabatan ..."
                                />
                              </Col>
                            </Row>
                          </Col>
                        </div>
                      ))
                    }
                    
                    <Col md={8}>
                      <button
                        type="button" 
                        className="btn btn-default btn-xs"
                        onClick={() => {
                          add();
                        }}
                      >
                        Tambah
                      </button>
                    </Col>
                  </Row>
                )
              }
            }
          </Form.List>
        </Col>
        <Col md={12}>
          <Row>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.surat_pernyataan !== currentValues.surat_pernyataan}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="Surat Pernyataan dan Kebenaran"
                      name="surat_pernyataan"
                      beforeUpload={() => false}
                      file={getFieldValue('surat_pernyataan')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.kta !== currentValues.kta}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="KTA"
                      name="kta"
                      beforeUpload={() => false}
                      file={getFieldValue('kta')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.akta !== currentValues.akta}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="Akta"
                      name="akta"
                      beforeUpload={() => false}
                      file={getFieldValue('akta')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.npwp !== currentValues.npwp}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="NPWP"
                      name="npwp"
                      beforeUpload={() => false}
                      file={getFieldValue('npwp')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.siup !== currentValues.siup}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="SIUP"
                      name="siup"
                      beforeUpload={() => false}
                      file={getFieldValue('siup')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 18 }}>
          <button
            className="btn btn-default mt-20"
          >
            Daftar Penerbit
          </button>
        </Col>
      </Row>
    </Form>
  )
}

export default FormPublisher