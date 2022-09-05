<template>
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div class="sidenav-header text-start">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="#" target="_blank">
        <img src="/assets/img/ic_xmr.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold">Manage System</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <HomeRouter/>
        <AuthorRouter/>
        <ProfileRouter/>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { toggleSideNav } from '@/common/index'

import HomeRouter from '@/components/router/partial/HomeRouter.vue' // @ is an alias to /src

import ProfileRouter from '@/components/router/partial/ProfileRouter.vue'

import AuthorRouter from '@/components/router/partial/AuthorRouter.vue'

@Options({

  props: {

    msg: String

  },

  components: {

    HomeRouter,

    ProfileRouter,

    AuthorRouter

  },

  mounted () {
    const iconSidenav = document.getElementById('iconSidenav')

    if (iconSidenav) {
      iconSidenav.addEventListener('click', toggleSideNav)
    }
  }

})

export default class Aside extends Vue {
  msg!: string
}

</script>
