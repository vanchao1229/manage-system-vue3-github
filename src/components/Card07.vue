<template>
    <div class="card h-100 text-start">
        <div class="card-header pb-0">
            <h6>Orders overview</h6>
            <p class="text-sm">
            <i class="fa fa-arrow-up text-success" aria-hidden="true"></i>
            <span class="font-weight-bold">24%</span> this month
            </p>
        </div>
        <div class="card-body p-3">
          <div class="timeline timeline-one-side">
            <div class="timeline-block mb-3" v-for="(item, index) in timelineData" :key="index">
              <span class="timeline-step">
                <i :class="getIconClass( item.iconName, item.iconColor )"></i>
              </span>
              <div class="timeline-content">
                <h6 class="text-dark text-sm font-weight-bold mb-0">{{item.descript}}</h6>
                <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">{{item.time}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { timeline01, TTimeline01Data } from '@/data'
import { TGetIconClass, getIconClass } from '@/common/vue/methods/card07/getIconClass'

@Options({

  mounted () {
    this.timelineData = timeline01().data
  },

  data () {
    return {
      timelineData: {}
    }
  },

  methods: {
    getIconClass: getIconClass
  }

})

export default class Card07 extends Vue {
  timelineData!: TTimeline01Data;
  getIconClass!: TGetIconClass;
}
</script>
