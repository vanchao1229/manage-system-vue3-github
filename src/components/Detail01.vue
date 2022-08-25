<template>
    <td>
        <div class="d-flex px-2 py-1">
            <div>
                <img :src=companyAvatar class="avatar avatar-sm me-3" alt={{companyAlt}}>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{{companyTitle}}</h6>
            </div>
        </div>
    </td>
    <td>
        <div class="avatar-group mt-2">
            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" :title=item.alt  v-for="(item, index) in members" :key="index">
                <img :src=item.avatar :alt=item.alt />
            </a>
        </div>
    </td>
    <td class="align-middle text-center text-sm">
        <span class="text-xs font-weight-bold"> {{budgetContent}} </span>
    </td>
    <td class="align-middle">
        <div class="progress-wrapper w-75 mx-auto">
            <div class="progress-info">
                <div class="progress-percentage">
                    <span class="text-xs font-weight-bold">{{processPercent}}</span>
                </div>
            </div>
            <div class="progress">
                <div :class=processClass role="progressbar" :aria-valuenow=process aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </td>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({

  props: {

    companyAvatar: String,

    companyAlt: String,

    companyTitle: String,

    budget: String,

    process: String,

    members: Array

  },

  computed: {

    processClass (): string {
      const widthClass = `w-${this.process}`

      const colorClass = (this.process === '100') ? 'bg-gradient-success' : 'bg-gradient-info'

      return `progress-bar ${colorClass} ${widthClass}`
    },

    processPercent (): string {
      const content = `${this.process}%`

      return content
    },

    budgetContent (): string {
      if (!this.budget) {
        return 'Not Set'
      }

      const content = `$${new Intl.NumberFormat('en-US').format(this.budget)}`

      return content
    }

  }

})

export default class Detail01 extends Vue {
  companyAvatar!: string;

  companyAlt!: string;

  companyTitle!: string;

  budget!: string;

  process!: string;

  processClass!: string;

  processPercent!: string;

  budgetContent!: string;

  members!: Array<Record<string, string>>;
}
</script>
