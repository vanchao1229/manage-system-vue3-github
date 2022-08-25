import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Author from '../views/Author.vue'
import Profile from '../views/Profile.vue'
import { _isAuthenticated, _tokenValidate, _canAccess } from '@/common'
import { getMenu } from '@/common/side_nav/index'
import { userRoles } from '@/common/user'
import { showModal02 } from '@/common/modal/tipModal02'

const menu = getMenu()

const routes: Array<RouteRecordRaw> = [

  {

    path: menu.home.path,

    name: menu.home.name,

    component: Home

  },

  {

    path: menu.profile.path,

    name: menu.profile.name,

    component: Profile

  },

  {

    path: menu.author.path,

    name: menu.author.name,

    component: Author

  },

  {

    path: menu.signin.path,

    name: menu.signin.name,

    component: Signin

  }
]

const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes

})

router.beforeEach(async (to, from) => {
  const _menuKey = to.name?.toString().toLowerCase() as string

  const _roles = userRoles()

  if (to.name !== menu.signin.name) {
    if (!_isAuthenticated()) {
      localStorage.clear()
      showModal02('Please login first!', true)
      return { name: menu.signin.name }
    }

    if (!_canAccess(_roles, _menuKey)) {
      return { name: menu.home.name }
    }

    _tokenValidate()
  }

  if (to.name === menu.signin.name) {
    if (_isAuthenticated()) {
      return { name: menu.home.name }
    }
  }
})

export default router
