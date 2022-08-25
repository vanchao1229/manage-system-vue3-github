<template>
  <div class="container-fluid">
    <div class="card card-body blur shadow-blur overflow-hidden">
      <div class="row gx-4">
        <div class="col-auto my-auto">
          <div class="avatar avatar-xl position-relative">
            <img src="/assets/img/bruce-mars.jpg" alt="profile_image" class="w-100 border-radius-lg shadow-sm">
          </div>
        </div>
        <div class="col-auto my-auto text-start">
          <div class="h-100">
            <h5 class="mb-1">
              Alex Thompson
            </h5>
            <p class="mb-0 font-weight-bold text-sm">
              CEO / Co-Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

@Options({

  computed: {
  },

  data () {
    return {
    }
  }

})

export default class Card09 extends Vue {
}
</script>
