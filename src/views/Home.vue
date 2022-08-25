<template>
  <HomeContent/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HomeContent from '@/components/main/content/HomeContent.vue' // @ is an alias to /src

@Options({
  components: {
    HomeContent
  }
})
export default class Home extends Vue {}
</script>
