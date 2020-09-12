import React from 'react'

import { Form, Input } from 'antd'

const InputText = (props) => {
  const {
    label,
    name,
    rules,
    placeholder
  } = props 
  
  return (
    <Form.Item
      {...props}
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
}

export default InputText