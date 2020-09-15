import React from 'react'

import {
  Radio, Form
} from 'antd'

const InputRadio = ({
  label,
  name,
  rules,
  options = [],
}) => (
  <Form.Item
    label={label}
    name={name}
    required={false}
    rules={rules}
    className="radio-form"
  >
    <Radio.Group>
      {
        options.map(key => <Radio value={key.value} key={Math.random()}>{key.label}</Radio>)
      }
    </Radio.Group>
  </Form.Item> 
)

export default InputRadio