import React from 'react'
import { connect } from 'react-redux'

import { fetchLogin } from 'store/actions/Auth'

import { 
  Card, Input, Button,
  Form 
} from 'antd'

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

const Login = ({ fetchLogin, history }) => (
  <div className="container-login">
    <div className="card-login">
      <Card bordered={false} style={{ boxShadow: '0px 22px 106px rgba(0, 0, 0, 0.07)' }}>
        <h4>Login into your account</h4>
        <Form
          {...layout}
          name='basic'
          onFinish={(val) => {
            fetchLogin(val)
            // history.push('/register')
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            required={false}
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input 
              className="input-login"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            required={false}
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password 
              className="input-login"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            {...buttonLayout}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  </div>
)

export default connect(
  null,
  { fetchLogin }
)(Login)