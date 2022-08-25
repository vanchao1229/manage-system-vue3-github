<template>
   <div class="fixed-plugin">
    <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i class="fa fa-cog py-2"> </i>
    </a>
    <div class="card shadow-lg">
      <div class="card-header pb-0 pt-3">
        <div class="float-start text-start">
          <h5 class="mt-3 mb-0">Theme Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div class="float-end mt-4">
          <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
      <hr class="horizontal dark my-1" />
      <div class="card-body pt-sm-3 pt-0">
        <sideNavType />
        <navBarFixed/>
      </div>
    </div>
   </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import { sideNavType, navBarFixed } from '@/components/fixedPlugin'

@Options({

  components: {

    sideNavType,

    navBarFixed

  },

  props: {

    msg: String

  },

  mounted () {
    // console.log('FixPlugin mounted')
  }

})

export default class FixPlugin extends Vue {
  msg!: string;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
