<template>
  <ContentLayout slotName="Dashboard">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="(item, key) in card01Data" :key="key">
        <Card01 :_title=item.title :_number=item.number :_numberPre=item.numberPre :_percent=item.percent>
          <slot><i :class="getCard01IconClass(item.icon)" aria-hidden="true"></i></slot>
        </Card01>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <Card02/>
      </div>
      <div class="col-lg-5">
        <Card03/>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-5 mb-lg-0 mb-4">
        <Card04/>
      </div>
      <div class="col-lg-7">
        <Card05/>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <Card06 />
      </div>
      <div class="col-lg-4 col-md-6">
        <Card07 />
      </div>
    </div>
  </ContentLayout>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import {

  ContentLayout,

  Card01,

  Card02,

  Card03,

  Card04,

  Card05,

  Card06,

  Card07

} from '@/components/index'

import { card01 } from '@/data'

@Options({

  mounted () {
    this.card01Data = card01()
  },

  components: {

    ContentLayout,

    Card01,

    Card02,

    Card03,

    Card04,

    Card05,

    Card06,

    Card07

  },

  data () {
    return {
      card01Data: {}
    }
  },

  methods: {
    getCard01IconClass (iconClass: string): string {
      return `ni ${iconClass} text-lg opacity-10`
    }
  }

})

export default class HomeContent extends Vue {
  card01Data!: Array< Record<string, string> >;
  getCard01IconClass!: (arg01: string) => string;
}

</script>
