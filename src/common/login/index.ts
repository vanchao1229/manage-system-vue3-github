import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { API_LIST } from '@/api'
import utf8ToB64 from '@/common/utf8-to-base64'
import { ILoginParams } from '@/interface'
import { showModal02 } from '@/common/modal/tipModal02'

const login = (params: ILoginParams): void => {
  params.password = utf8ToB64(params.password)
  axios.post(
    API_LIST.login,
    params,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  ).then((res) => {
    // console.log(res)
    const _data = res.data
    if (_data.code === 3200) {
      store.commit('setUserToken', _data.jwt)
      store.commit('setNickName', _data.user_info.nick_name)
      store.commit('setUserRoles', _data.user_info.role)
      // console.log('============debug login userinfo start=============')
      // console.log(store.state.user._token)
      // console.log(store.state.user._nick_name)
      // console.log(store.state.user._roles)
      // console.log('============debug login userinfo end=============')
      router.push({ name: 'Home' })
      return false
    }
    // console.log(_data.msg)
    showModal02(_data.msg, true)
    return false
  })
}

export {
  login
}
