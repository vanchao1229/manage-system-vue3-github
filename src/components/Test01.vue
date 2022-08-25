<template>
  <div>
    {{ selector01Id }}
    {{ selector02Id }}
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

@Options({

  props: {
    selector01Id: { type: String },

    selector02Id: { type: String }
  },

  methods: {
    selectOnChange01 (): void {
      // console.log('===========selectOnChange01============')
      // console.log('===========selectOnChange01============')
    },

    selectOnChange02 (): void {
      // console.log('===========selectOnChange02============')
      // console.log('===========selectOnChange02============')
    }

  }

})

// Related 2 dimension selector
export default class Test01 extends Vue {
    selector01Id!: string;

    selector02Id!: string;

    selectOnChange01!: () => void;

    selectOnChange02!: () => void;
}

</script>
