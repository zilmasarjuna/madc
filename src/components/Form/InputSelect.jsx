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
  placeholder,
  onChangeSelect
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
      showSearch
      onChange={onChangeSelect}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        options.map(key => <Option value={key.value} key={Math.random()}>{key.label}</Option>)
      }
    </Select>
  </Form.Item>
)

export default InputSelect