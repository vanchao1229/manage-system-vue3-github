<template>
  <div class="card z-index-2">
    <div class="card-header pb-0 text-start">
      <h6>Sales overview</h6>
      <p class="text-sm">
        <i class="fa fa-arrow-up text-success"></i>
        <span class="font-weight-bold">4% more</span> in 2021
      </p>
    </div>
    <div class="card-body p-3">
      <div class="chart">
        <Chart01 />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Chart01 } from '@/components'

@Options({

  components: {

    Chart01

  },

  props: {

    _title: String

  },

  data () {
    return {
    }
  },

  computed: {
  }
})

export default class Card05 extends Vue {
  _title!: string;
}

</script>
