<template>
  <AuthorContent />
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import AuthorContent from '@/components/main/content/AuthorContent.vue'

@Options({

  components: {

    AuthorContent

  }

})

export default class Author extends Vue {}

</script>
