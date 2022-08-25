<template>
  <div class="card">
    <div class="card-body p-3">
      <div class="row">
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100 text-start">
            <p class="mb-1 pt-2 text-bold">Built by developers</p>
            <h5 class="font-weight-bolder">Manage System</h5>
            <p class="mb-5">From colors, cards, typography to complex elements, you will find the full documentation.</p>
            <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
              Read More
              <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
          <div class="bg-gradient-primary border-radius-lg h-100">
            <img src="/assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
            <div class="position-relative d-flex align-items-center justify-content-center h-100">
              <img class="w-100 position-relative z-index-2 pt-4" src="/assets/img/illustrations/rocket-white.png" alt="rocket">
            </div>
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

    _title: String

  }

})

export default class Card02 extends Vue {
  _title!: string;
}

</script>
