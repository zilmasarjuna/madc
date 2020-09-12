import React from 'react'

import {  
  Form, Button, Input,
  Row, Col,
} from 'antd'

import InputText from 'components/Form/InputText'
import InputTextarea from 'components/Form/InputTextarea'

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
        <InputTextarea
          label="Address"
          name="address"
          rules={[{
            required: true,
            message: 'Please input your name' 
          }]}
          placeholder="Alamat lengkap ..."
        />
      </Col>
    </Row>
  </Form>
)

export default FormPublisher