import React from 'react'

import {  
  Form, Button, Input,
  Row, Col,
} from 'antd'

import InputText from 'components/Form/InputText'
import InputTextarea from 'components/Form/InputTextarea'
import InputSelect from 'components/Form/InputSelect'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}



const FormPublisher = () => (
  <Form
    {...layout}
    name="basic"
    initialValues={{
      pic: [{
        name: '',
        phone: '',
        email: '',
        title: ''
      }, {
        name: '',
        phone: '',
        email: '',
        title: ''
      },]
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
    <Row>
      <Col md={24}>
        <Form.List name="pic">
          {
            (fields, {add, remove}) => {
              return (
                <Row gutter={20}>
                  {
                    fields.map((field, id) => (
                      <>
                        
                        <Col md={12}>
                          <div className="title-row">
                            <Row>
                              <Col md={12}>
                                <h3 className="title-card title-left">Person {id + 1}</h3>
                              </Col>
                              <Col md={12}>
                                <button type="button" className="btn btn-tertiary btn-delete-right">
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
                                name={[fields.name, 'name']}
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
                                name={[fields.name, 'phone']}
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
                                name={[fields.name, 'email']}
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
                                name={[fields.name, 'title']}
                                rules={[{
                                  required: true,
                                  message: 'Please input jabatan' 
                                }]}
                                placeholder="Jabatan ..."
                              />
                            </Col>
                          </Row>
                        </Col>
                      </>
                    ))
                  }
                  
                  <Col md={24}>
                    <button
                      type="button" 
                      className="btn btn-default"
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
    </Row>
  </Form>
)

export default FormPublisher