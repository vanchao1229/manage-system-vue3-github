import { getMenu } from '@/common/side_nav/index'

export const _canAccess = (roles: string, menuKey: string):boolean => {
  const menu = getMenu()
  if (!menu[menuKey]) {
    return false
  }
  const _canAccess = menu[menuKey].roles.indexOf(roles) >= 0
  return _canAccess
}
