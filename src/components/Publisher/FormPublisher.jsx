import React from 'react'
import { connect } from 'react-redux'

import {  
  Form, Row, Col,
} from 'antd'

import { getProvince, getCity } from 'store/actions/Address'

import InputText from 'components/Form/InputText'
import InputTextarea from 'components/Form/InputTextarea'
import InputSelect from 'components/Form/InputSelect'
import InputUpload from 'components/Form/InputUpload'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


const FormPublisher = ({ onSubmit, province, city, getProvince, getCity }) => {
  const [form] = Form.useForm()
  const [state, changeState] = React.useState({
    valSuratPernyataan: '',
    valKta: '',
    valAkta: '',
    valNpwp: '',
    valSiup: ''
  })

  React.useEffect(() => {
    getProvince()
  }, [])

  const onChangeProvince = (val) => {
    getCity(val)
  } 

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{
        pic: [{
            id: 1,
            name: '',
            phone: '',
            email: '',
            title: ''
          }, {
            id: 2,
            name: '',
            phone: '',
            email: '',
            title: ''
          }],
        surat_pernyataan: null
      }}
      onFinish={(val) => {
        const params = {
          ...val,
          ...state,
        }
        onSubmit(params)
      }}
    >
      <Row gutter={20}>
        <Col md={12} xs={24}>
          <InputText 
            label="Nama Penerbit"
            name="name"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Nama penerbit ..."
          />
          <InputText 
            label="Email "
            name="email"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Email ..."
          />
          <InputText 
            label="No. Handphone"
            name="phone"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="No Handphone ..."
          />
          <Row gutter={10}>
            <Col md={12} xs={24}>
              <InputSelect
                label="Province"
                name="province"
                rules={[{
                  required: true,
                  message: 'Wajib diisi' 
                }]}
                options={province.data}
                placeholder="Provinsi..."
                onChangeSelect={onChangeProvince}
              />
            </Col>
            <Col md={12} xs={24}>
              <InputSelect
                label="City"
                name="city"
                rules={[{
                  required: true,
                  message: 'Wajib diisi' 
                }]}
                options= {city.data}
                placeholder="City..."
              />
            </Col>
          </Row>
          
          <InputTextarea
            label="Alamat"
            name="address"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Alamat lengkap ..."
          />
        </Col>
        <Col md={12} xs={24}>
          <InputText 
            label="Nama Direktur"
            name="director_name"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Nama Direktur ..."
          />
          <InputText 
            label="No. Handphone Direktur"
            name="director_phone"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="No. Handphone Direktur ..."
          />
          <InputText 
            label="Email Direktur"
            name="director_email"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Email Direktur ..."
          />
          <InputTextarea
            label="Alamat kantor"
            name="head_office"
            rules={[{
              required: true,
              message: 'Wajib diisi' 
            }]}
            placeholder="Alamat lengkap kantor ..."
          />
        </Col>
      </Row>
      <Row>
        <Col md={24}><hr /></Col>
      </Row>
      <Row gutter={20}>
        <Col md={12} xs={24}>
          <Form.List name="pic">
            {
              (fields, {add, remove}) => {
                return (
                  <Row gutter={20}>
                    {
                      fields.map((field, id) => (
                        <div key={field.key}>
                          <Col md={24}>
                            <div className="title-row">
                              <Row>
                                <Col md={12} xs={24}>
                                  <h3 className="title-card title-left">Person {id + 1}</h3>
                                </Col>
                                <Col md={12} xs={24}>
                                  <button 
                                    type="button" 
                                    className="btn btn-tertiary btn-delete-right"
                                    onClick={() => remove(field.name)}
                                  >
                                      Delete
                                  </button>
                                </Col>
                              </Row>
                            </div>
                            <Row gutter={20}>
                              <Col md={12} xs={24}>
                                <InputText
                                  {...field}
                                  label="Nama"
                                  name={[field.name, 'name']}
                                  fieldKey={[field.fieldKey, 'name']}
                                  rules={[{
                                    required: true,
                                    message: 'Wajib diisi' 
                                  }]}
                                  placeholder="Email Direktur ..."
                                />
                              </Col>
                              <Col md={12} xs={24}>
                                <InputText
                                  {...field}
                                  label="No. Handphone"
                                  name={[field.name, 'phone']}
                                  fieldKey={[field.fieldKey, 'phone']}
                                  rules={[{
                                    required: true,
                                    message: 'Wajib diisi' 
                                  }]}
                                  placeholder="No. Handphone ..."
                                />
                              </Col>
                              <Col md={12} xs={24}>
                                <InputText
                                  {...field}
                                  label="Email"
                                  name={[field.name, 'email']}
                                  fieldKey={[field.fieldKey, 'email']}
                                  rules={[{
                                    required: true,
                                    message: 'Wajib diisi' 
                                  }]}
                                  placeholder="Email ..."
                                />
                              </Col>
                              <Col md={12} xs={24}>
                                <InputText
                                  {...field}
                                  label="Jabatan"
                                  name={[field.name, 'title']}
                                  fieldKey={[field.fieldKey, 'title']}
                                  rules={[{
                                    required: true,
                                    message: 'Wajib diisi' 
                                  }]}
                                  placeholder="Jabatan ..."
                                />
                              </Col>
                            </Row>
                          </Col>
                        </div>
                      ))
                    }
                    
                    <Col md={8}>
                      <button
                        type="button" 
                        className="btn btn-default btn-xs mt-20"
                        onClick={() => {
                          add();
                        }}
                      >
                        Tambah
                      </button>
                    </Col>
                  </Row>
                )
              }
            }
          </Form.List>
        </Col>
        <Col md={12} xs={24}>
          <Row>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.surat_pernyataan !== currentValues.surat_pernyataan}
              >
                {({ getFieldValue, setFieldsValue }) => {
                  return (
                    <InputUpload 
                      label="Surat Pernyataan dan Kebenaran"
                      name="surat_pernyataan"
                      beforeUpload={(e) => {
                        getBase64(e).then(res => {
                          changeState({
                            ...state,
                            valSuratPernyataan: res
                          })
                        })
                        
                        return false
                      }}
                      file={getFieldValue('surat_pernyataan')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.kta !== currentValues.kta}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="KTA"
                      name="kta"
                      beforeUpload={(e) => {
                        getBase64(e).then(res => {
                          changeState({
                            ...state,
                            valKta: res
                          })
                        })
                        
                        return false
                      }}
                      file={getFieldValue('kta')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.akta !== currentValues.akta}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="Akta"
                      name="akta"
                      beforeUpload={(e) => {
                        getBase64(e).then(res => {
                          changeState({
                            ...state,
                            valAkta: res
                          })
                        })
                        
                        return false
                      }}
                      file={getFieldValue('akta')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.npwp !== currentValues.npwp}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="NPWP"
                      name="npwp"
                      beforeUpload={(e) => {
                        getBase64(e).then(res => {
                          changeState({
                            ...state,
                            valNpwp: res
                          })
                        })
                        
                        return false
                      }}
                      file={getFieldValue('npwp')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="mg-0"
                shouldUpdate={(prevValues, currentValues) => prevValues.siup !== currentValues.siup}
              >
                {({ getFieldValue }) => {
                  return (
                    <InputUpload 
                      label="SIUP"
                      name="siup"
                      beforeUpload={(e) => {
                        getBase64(e).then(res => {
                          changeState({
                            ...state,
                            valSiup: res
                          })
                        })
                        
                        return false
                      }}
                      file={getFieldValue('siup')}
                    />
                  )
                }}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 18 }}>
          <button
            className="btn btn-default mt-20"
          >
            Daftar Penerbit
          </button>
        </Col>
      </Row>
    </Form>
  )
}

export default connect(
  ({ bntp: { province, city } }) => ({ province, city }),
  { getProvince, getCity }
)(FormPublisher)
