import axios from 'axios'
import { API_LIST } from '@/api'
import store from '@/store'
import router from '@/router'
import { showModal02 } from '@/common/modal/tipModal02'

const _getUserToken = (): string => {
  const _key = 'site_token_01'
  if (!localStorage.getItem(_key)) {
    return ''
  }
  return localStorage.getItem(_key) as string
}

export const _tokenValidate = (): void => {
  const params = {
  }

  axios.post(
    API_LIST.auth,
    params,
    {
      headers: {
        'Content-Type': 'application/json',
        'Http-Custom-Token': _getUserToken()
      }
    }
  ).then((res) => {
    const _data = res.data
    // console.log('===============token validate=============')
    // console.log(res.data)
    // console.log(_data.code === 3210)
    // console.log('===============token validate=============')
    // token time expired
    if (_data.code !== 3210) {
      localStorage.clear()
      store.commit('setUserToken', '')
      store.commit('setNickName', '')
      store.commit('setUserRoles', '')
      router.push({ name: 'Signin' })
      showModal02('Your login has already expired!', true)
      return false
    }
    return false
  })
}
