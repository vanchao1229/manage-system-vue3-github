<template>
  <div class="card h-100 p-3">
    <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100" style="background-image: url('/assets/img/ivancik.jpg');">
      <span class="mask bg-gradient-dark"></span>
      <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3 text-start">
        <h5 class="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
        <p class="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
        <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
          Read More
          <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({

  props: {

    _title: String

  }

})

export default class Card03 extends Vue {
  _title!: string;
}

</script>
