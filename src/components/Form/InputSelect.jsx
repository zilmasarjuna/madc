import React from 'react'

import {
  Select, Form
} from 'antd'

const { Option } = Select

const InputSelect = ({
  label,
  name,
  rules,
  options = [],
  placeholder
}) => (
  <Form.Item
    label={label}
    name={name}
    required={false}
    rules={rules}
    className="select-form"
  > 
    <Select
      placeholder={placeholder}
      allowClear
      dropdownClassName="dropdown-select-form"
    >
      {
        options.map(key => <Option value={key.value} key={Math.random()}>{key.label}</Option>)
      }
    </Select>
  </Form.Item>
)

export default InputSelect