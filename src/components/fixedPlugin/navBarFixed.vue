<template>
    <!-- Navbar Fixed -->
    <div class="mt-3 text-start">
        <h6 class="mb-0">Navbar Fixed</h6>
    </div>
    <div class="form-check form-switch ps-0">
        <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed">
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import { navbarFixed as navbarFixedClickAction } from '@/common/head_nav'

@Options({

  props: {

    msg: String

  },

  mounted () {
    navbarFixedClickAction()
  }

})

export default class navbarFixed extends Vue {
  msg!: string;
}

</script>
