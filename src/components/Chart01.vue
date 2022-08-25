<template>
  <Line :chart-options=chartOptions :chart-data=chartData :css-classes=chartClasses :chart-id=chartId :styles=chartStyle />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Plugin, Filler, BorderRadius } from 'chart.js'
import { chart02 } from '@/data'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler)

const _chart = chart02()

@Options({

  mounted () {
    this.chartOptions = _chart.option
    this.chartData = _chart.data
  },

  components: {

    Line

  },

  data () {
    return {
      chartOptions: {},
      chartData: {},
      chartClasses: 'chart-canvas',
      chartId: 'chart-line',
      chartStyle: {
        height: '300px'
      }
    }
  }

})

export default class Chart01 extends Vue {
  chartData!: Record<string, unknown>;
  chartOptions!: Record<string, unknown>;
  chartStyle!: Record<string, unknown>;
  chartClasses!: string;
  chartId!: string;
}

</script>
