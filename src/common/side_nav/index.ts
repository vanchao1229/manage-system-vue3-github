type TypeMenu = {
  [key: string]: {
    name: string,
    path: string,
    roles: Array<string|null>
  }
}

const menu = {
  home: {
    name: 'Home',
    path: '/',
    roles: ['editor', 'admin']
  },
  profile: {
    name: 'Profile',
    path: '/profile',
    roles: ['editor', 'admin']
  },
  author: {
    name: 'Author',
    path: '/author',
    roles: ['admin']
  },
  signin: {
    name: 'Signin',
    path: '/signin',
    roles: ['guest', 'editor', 'admin']
  }
}

export const getMenu = (): TypeMenu => {
  return menu
}
