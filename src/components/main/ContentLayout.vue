<template>
  <ContentNav :slotName=slotName />
  <div class="container-fluid py-4">
      <slot>main content here</slot>
      <footer class="footer pt-3">
      <ContentFooter />
      </footer>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import {

  ContentNav,

  ContentFooter

} from '@/components/main/index'

@Options({

  props: {
    slotName: String
  },

  components: {

    ContentNav,

    ContentFooter

  },

  computed: {
  }

})

export default class ConentLayout extends Vue {
  slotName!: string;
}

</script>
