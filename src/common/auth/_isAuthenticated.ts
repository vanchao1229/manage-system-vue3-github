// import store from '@/store'

const _isAuthenticated = (): boolean => {
  const _key = 'site_token_01'
  const _token = !localStorage.getItem(_key) ? '' : localStorage.getItem(_key)
  // console.log('=======-------_token--------=======')
  // console.log(_token)
  // console.log('=======-------_token--------=======')
  return !!_token
  // return store.state.user._isAuthenticated
}

export {
  _isAuthenticated
}
