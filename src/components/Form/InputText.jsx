import React from 'react'

import { Form, Input } from 'antd'

const InputText = ({
  label,
  name,
  rules,
  placeholder
}) => (
  <Form.Item
    label={label}
    name={name}
    required={false}
    rules={rules}
    className="input-form"
  > 
    <Input 
      placeholder={placeholder}
    />
  </Form.Item>
)

export default InputText