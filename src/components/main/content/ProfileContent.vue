<template>
  <ContentLayout slotName="Profile">
    <Card09/>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12 col-xl-4"><Card10/></div>
        <div class="col-12 col-xl-4"><Card11/></div>
        <div class="col-12 col-xl-4"><Card12/></div>
        <div class="col-12 mt-4"><Card13/></div>
      </div>
    </div>
  </ContentLayout>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { ContentLayout } from '@/components/index' // @ is an alias to /src

import Card09 from '@/components/Card09.vue'

import Card10 from '@/components/Card10.vue'

import Card11 from '@/components/Card11.vue'

import Card12 from '@/components/Card12.vue'

import Card13 from '@/components/Card13.vue'

@Options({

  props: {
    // msg: String
  },

  components: {

    ContentLayout,

    Card09,

    Card10,

    Card11,

    Card12,

    Card13

  }
})
export default class ProfileContent extends Vue {
//   msg!: string
}
</script>
