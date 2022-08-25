<template>
    <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted text-lg-start">
            ©{{ licenseTime }}
            made with <i class="fa fa-heart"></i> by
            <a href="#" class="font-weight-bold" target="_blank">Author</a>
            for a better web.
            </div>
        </div>
        <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
            <li class="nav-item">
                <a href="#" class="nav-link text-muted" target="_blank">Author</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-muted" target="_blank">About Us</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-muted" target="_blank">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link pe-0 text-muted" target="_blank">License</a>
            </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({

  computed: {
    licenseTime: (): string => {
      const _date = (new Date().getFullYear()).toString()
      return _date
    }
  }

})

export default class ContentFooter extends Vue {
  licenseTime!: string;
}
</script>
