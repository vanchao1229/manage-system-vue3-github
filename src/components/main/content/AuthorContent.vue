<template>
  <ContentLayout slotName="Author">
    <Card08 />
  </ContentLayout>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import {

  ContentLayout,

  Card08

} from '@/components/index'

@Options({

  components: {

    ContentLayout,

    Card08

  },

  data () {
    return {
    }
  }

})

export default class AuthorContent extends Vue {
}

</script>
