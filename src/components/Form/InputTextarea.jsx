import React from 'react'

import { Form, Input } from 'antd'

const InputTextarea = ({
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
    className="textarea-form"
  > 
    <Input.TextArea
      placeholder={placeholder}
    />
  </Form.Item>
)

export default InputTextarea