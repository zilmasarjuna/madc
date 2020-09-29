import axios from 'utils/API'

import {
  requestPost,
  requestPostSuccess,
  requestPostFailure
} from './Request'

export const registerAccountPublisher = params => (
  (dispatch) => {
    dispatch(requestPost())
    const formData = new FormData()
    formData.append('pic', params.pic)
    formData.append('surat_pernyataan', params.surat_pernyataan.file)
    formData.append('siup', params.siup.file)
    formData.append('kta', params.kta.file)
    formData.append('npwp', params.npwp.file)
    formData.append('akta', params.akta.file)
    formData.append('name', params.name)
    formData.append('address', params.address)
    formData.append('city', params.city)
    formData.append('director_email', params.director_email)
    formData.append('director_name', params.director_name)
    console.log(formData.get('pic'))

    const reqPromise = new Promise((resolve, reject) => {
      axios.post('/publisher', formData).then((response) => {
        if (response.data.meta.code === 200) {
          dispatch(requestPostSuccess())

          resolve({ status: true })
        } else {
          dispatch(requestPostFailure())
          resolve({
            status: false,
            message: response.data.meta.message,
          })
        }
      }).catch((e) => {
        reject({
          status: false,
          message: 'Ada masalah dengan server.'
        })
      })
    })

    return reqPromise
  }
)