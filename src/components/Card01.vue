<template>
    <div class="card">
        <div class="card-body p-3">
            <div class="row">
                <div class="col-8">
                    <div class="numbers text-start">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">{{ _title }}</p>
                        <h5 class="font-weight-bolder mb-0">
                            {{ realNumber }}
                            <span v-bind:class="numberClass">{{ realPercent }}</span>
                        </h5>
                    </div>
                </div>
                <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <slot><i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

@Options({

  props: {

    _title: String,

    _number: String,

    _numberPre: String,

    _percent: String

  },

  computed: {

    numberClass () {
      const _num = parseFloat(this._percent)

      if (_num < 0) {
        return 'text-danger text-sm font-weight-bolder'
      }

      return 'text-success text-sm font-weight-bolder'
    },

    realNumber () {
      const _num = (new Intl.NumberFormat('en-US')).format(this._number)

      return `${this._numberPre}${_num}`
    },

    realPercent () {
      const _per = parseFloat(this._percent) > 0 ? `+${this._percent}%` : `${this._percent}%`

      return `${_per}`
    }

  }

})

export default class Card01 extends Vue {
  _title!: string;

  _number!: string;

  _numberPre!: string;

  _percent!: string;

  numberClass!: string;

  realNumber!: string;

  realPercent!: string;
}
</script>
