import router from '@/router'
import store from '@/store'
import { showModal02 } from '@/common/modal/tipModal02'

export const logout = (): boolean => {
  localStorage.clear()
  store.commit('setUserToken', '')
  store.commit('setNickName', '')
  store.commit('setUserRoles', 'guest')
  router.push({ name: 'Signin' })
  showModal02('You has already exit the system', true)
  return false
}
