export const userNickName = (): string => {
  const _key = 'user_nick_name_01'
  // const userNickName = store.state.user._nick_name
  const userNickName = localStorage.getItem(_key)
  if (!userNickName) return 'Please set your nick name'
  return userNickName
}

export const userRoles = (): string => {
  const _key = 'user_roles_01'
  // const userNickName = store.state.user._nick_name
  const userRoles = localStorage.getItem(_key)
  if (!userRoles) return 'guest'
  return userRoles
}
