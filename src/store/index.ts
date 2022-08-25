import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      _token: '',
      _roles: 'guest',
      _nick_name: ''
    },
    modal01: {
      _isClickedNew: false
    }
  },
  mutations: {
    setUserToken (state, token): void {
      const _key = 'site_token_01'
      localStorage.setItem(_key, token)
      const _token = !localStorage.getItem(_key) ? '' : localStorage.getItem(_key)
      state.user._token = _token as string
    },
    setNickName (state, nickName): void {
      const _key = 'user_nick_name_01'
      localStorage.setItem(_key, nickName)
      const _userNickeName = !localStorage.getItem(_key) ? '' : localStorage.getItem(_key)
      state.user._nick_name = _userNickeName as string
    },
    setUserRoles (state, roles): void {
      const _key = 'user_roles_01'
      localStorage.setItem(_key, roles)
      const _roles = !localStorage.getItem(_key) ? '' : localStorage.getItem(_key)
      state.user._roles = _roles as string
    },
    getModal01IsClickedNew (state): boolean {
      return state.modal01._isClickedNew
    },
    setModal01IsClickedNew (state, isClickedNew: boolean): void {
      state.modal01._isClickedNew = isClickedNew
    }
  },
  actions: {
  },
  modules: {
  }
})
