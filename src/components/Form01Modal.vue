<template>
<div class="modal fade" id="form01Modal" tabindex="-1" role="dialog" aria-labelledby="form01Modal-form" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
              <div class="card card-plain">
                  <div class="card-body">
                    <Form01Detail
                      :formItemModel="formItemModel"
                      :formKey="formKey"
                      :refData="refData"
                      :isNew="isNew"
                      :parentData="parentData"
                      :childData="childData"
                    />
                  </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { TAuth01DataSingle } from '@/data'

import Form01Detail from '@/components/Form01Detail.vue'

import { TItemParent, TItemChild } from '@/common/selector/related01Type'

@Options({

  props: {

    formItemModel: { type: Object },

    formKey: { type: Number },

    refData: { type: Object },

    isNew: { type: Boolean },

    parentData: { type: Array },

    childData: { type: Object }

  },

  components: {

    Form01Detail

  }

})

export default class Form01Modal extends Vue {
  formItem!: TAuth01DataSingle;

  formItemModel!: TAuth01DataSingle;

  formKey!: number;

  refData!: Record<string, unknown>;

  isNew!: boolean;

  addData!: () => void;

  saveData!: () => void;

  deleteData!: () => void;

  parentData!: TItemParent;

  childData!: TItemChild;
}

</script>

<style lang="scss">
</style>
