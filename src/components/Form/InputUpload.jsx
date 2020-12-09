import React from 'react'

import {
  Form, Upload
} from 'antd'

const UploadButton = () => (
  <div className="button-upload">
    <div>Upload</div>
  </div>
)

const InputUpload = ({
  label,
  name,
  rules,
  beforeUpload,
  file,
  normfile,
}) => {
  return (
  <Form.Item
    label={label}
    name={name}
    rules={rules}
    className="upload-form"
  >
    <Upload 
      name={name}
      action={null}
      className="upload-box"
      beforeUpload={beforeUpload}
      fileList={false}
    >
      {file ? <div className="info-text-upload">{file.file.name}</div> : <UploadButton />}
    </Upload>
  </Form.Item>
)}

export default InputUpload