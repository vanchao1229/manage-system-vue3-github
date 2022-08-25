<template>
    <li class="nav-item">
        <router-link class="nav-link" active-class="active" v-bind:to="_dest">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <slot>svg code here</slot>
            </div>
            <span class="nav-link-text ms-1">{{ _name }}</span>
        </router-link>
    </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    _dest: String,
    _isActive: Boolean,
    _name: String
  }
})

export default class RouterLayout extends Vue {
  _dest!: string;
  _isActive!: boolean;
  _name!: string;
}

</script>
