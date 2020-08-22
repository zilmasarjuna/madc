import React from 'react'

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

const Login = () => (
  <div className="container-login">
    <div className="card-login">
      <Card bordered={false} style={{ boxShadow: '0px 22px 106px rgba(0, 0, 0, 0.07)' }}>
        <h4>Login into your account</h4>
        <Form
          {...layout}
          name='basic'
          onFinish={(val) => console.log('finis', val)}
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

export default Login