<template>
  <ProfileContent/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProfileContent from '@/components/main/content/ProfileContent.vue' // @ is an alias to /src

@Options({
  components: {
    ProfileContent
  }
})
export default class Profile extends Vue {}
</script>
