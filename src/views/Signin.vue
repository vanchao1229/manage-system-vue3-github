<template>
  <div class="signin">
    <SigninContent/>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import SigninContent from '@/components/main/content/SigninContent.vue' // @ is an alias to /src

@Options({

  components: {

    SigninContent

  }

})

export default class Signin extends Vue {}

</script>
