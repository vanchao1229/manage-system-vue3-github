<template>
  <div v-if="currentRouteName !== 'signin'">
    <Aside msg="Aside here"/>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <router-view/>
    </main>
    <FixPlugin />
  </div>
  <div v-else>
    <router-view/>
  </div>
  <TipModal02 />
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import Aside from '@/components/Aside.vue'

import FixPlugin from './components/FixPlugin.vue'

import TipModal02 from '@/components/TipModal02.vue'

@Options({

  components: {

    Aside,

    FixPlugin,

    TipModal02

  },

  computed: {

    currentRouteName () {
      const _name = this.$route.name

      if (_name) {
        return _name.toLowerCase()
      }

      return ''
    }

  }

})

export default class App extends Vue {
  currentRouteName!: string;
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
