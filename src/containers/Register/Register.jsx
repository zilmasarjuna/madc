import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
  Card, Input, Button,
  Form, Row, Col
} from 'antd'

import { RenderAnimation } from 'components'

import { registerUser } from 'store/actions/Auth'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}

const buttonLayout = {
  wrapperCol: {
    span: 24
  }
}

const Register = ({ registerUser }) => {
  return (
    <RenderAnimation>
      <div className="container-auth">
        <div className="card-auth card-register">
          <Card bordered={false} style={{ boxShadow: '0px 22px 106px rgba(0, 0, 0, 0.07)' }}>
            <h4>Register your account</h4>
            <Form
              {...layout}
              name='basic'
              onFinish={val => {
                const params = {
                  name: val.name,
                  email: val.email,
                  password: val.password,
                  phone: val.phone,
                  is_active: 1
                }
                registerUser(params).then(res => {
                  console.log('res', res)
                }).catch(err => {
                  console.log('res', err)
                })
              }}
            >
              <Row gutter={20}>
                <Col md={12} xs={24}>
                  <Form.Item
                    label="Nama Lengkap"
                    name="name"
                    required={false}
                    rules={[
                      {
                        required: true,
                        message: 'Required!'
                      }
                    ]}
                  >
                    <Input 
                      className="input-login"
                      placeholder="Full Name"
                    />
                  </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                  <Form.Item
                    label="Email"
                    name="email"
                    required={false}
                    rules={[
                      {
                        type: 'email',
                        required: true,
                        message: 'Format tidak valid.'
                      }
                    ]}
                  >
                    <Input 
                      className="input-login"
                      placeholder="Email"
                    />
                  </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                  <Form.Item
                    label="Nomor Telepon"
                    name="phone"
                    required={false}
                    rules={[
                      {
                        required: true,
                        message: 'Format tidak valid.'
                      }
                    ]}
                  >
                    <Input
                      className="input-login"
                      placeholder="Nomor Telepon"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <hr />
              <Row gutter={20}>
                <Col md={12} xs={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    required={false}
                    rules={[
                      {
                        required: true,
                        message: 'Required!'
                      }
                    ]}
                  >
                    <Input.Password
                      className="input-login"
                      placeholder="Password"
                    />
                  </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                  <Form.Item
                    label="Konfirmasi Password"
                    name="confirm_password"
                    required={false}
                    rules={[
                      {
                        required: true,
                        message: 'Required!'
                      }
                    ]}
                  >
                    <Input.Password
                      className="input-login"
                      placeholder="Konfirmasi Password"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                {...buttonLayout}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className="info-footer">
              Have a account ? <Link to="/">Login</Link>
            </div>
          </Card>
        </div>
      </div>
    </RenderAnimation>
  )
}

export default connect(
  null,
  { registerUser }
)(Register)