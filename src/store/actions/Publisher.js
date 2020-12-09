import axios from 'utils/API'
import configureStore from 'store/configStore'

import {
  requestPost,
  requestPostSuccess,
  requestPostFailure
} from './Request'


export const registerAccountPublisher = params => (
  (dispatch) => {
    dispatch(requestPost())
    const { store } = configureStore()
    const { data : { id } } = store.getState().bntp.auth
    let pic = []

    params.pic.forEach(key => {
      pic.push({
        name: key.name,
        phone: key.phone,
      })
    })
    const payload = {
      "name": params.name,
      "address": params.address,
      "province_id": params.province,
      "city_id": params.city,
      "user_id": id,
      "phone": params.phone,
      "email": params.email,
      "head_office": params.head_office,
      "director_name": params.director_name,
      "director_phone": params.director_phone,
      "director_email": params.director_email,
      "no_kta": params.no_kta,
      "kta": params.valKTa,
      "surat": params.valSiup,
      "npwp": params.valNpwp,
      "siup": params.valSiup,
      "akta": params.valAkta,
      "surat_pernyataan": params.valSuratPernyataan,
      "ContactPersons": pic
    }

    const reqPromise = new Promise((resolve, reject) => {
      axios.post('/publisher/create', payload).then((response) => {
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