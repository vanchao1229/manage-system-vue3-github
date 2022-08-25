<template>
    <!-- Sidenav Type -->
    <div class="mt-3 text-start">
        <h6 class="mb-0">Sidenav Type</h6>
        <p class="text-sm">Choose between 2 different sidenav types.</p>
    </div>
    <div class="d-flex">
        <button class="btn bg-gradient-primary w-100 px-3 mb-2 sideNavTypeAction01 active" id='sideNavType01' data-class="bg-transparent">Transparent</button>
        <button class="btn bg-gradient-primary w-100 px-3 mb-2 sideNavTypeAction01 ms-2" id='sideNavType02' data-class="bg-white">White</button>
    </div>
    <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { sideBarType, sidenavTypeOnResize } from '@/common/head_nav'

@Options({

  props: {

    msg: String

  },

  mounted () {
    const _el01 = document.getElementById('sideNavType01') as HTMLElement

    const _el02 = document.getElementById('sideNavType02') as HTMLElement

    sideBarType(_el01)

    sideBarType(_el02)

    window.addEventListener('resize', sidenavTypeOnResize)

    window.addEventListener('load', sidenavTypeOnResize)
  }

})

export default class sideNavType extends Vue {
  msg!: string;
}

</script>
