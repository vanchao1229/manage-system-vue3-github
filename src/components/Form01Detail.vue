<template>
    <form role="form text-start">
        <label :class="labelClassName">User Name</label>
        <div class="input-group">
        <input
            type="text"
            v-model.lazy="getFormItem.uname"
            v-on:blur="onUnameChange()"
            class="form-control"
            placeholder="username"
            aria-label="username"
            aria-describedby="username-addon"
        />
        </div>
        <small :class="tipClass">{{ userNameTipContent }}</small>
        <label :class="labelClassName">Email</label>
        <div class="input-group">
        <input
            type="text"
            v-model.lazy="getFormItem.email"
            v-on:blur="onEmailChange()"
            class="form-control"
            placeholder="email"
            aria-label="email"
            aria-describedby="email-addon"
        />
        </div>
        <small :class="tipClass">{{ emailTipContent }}</small>
        <SelectorRelated01Type
          :parentData="parentData"
          :childData="childData"
          :isNew="isNew"
          :formItemModel="getFormItemSelected()"
          :tipClass="tipClass"
          :parentPartTipContent="partTipContent"
          :parentTitleTipContent="titleTipContent"
          :parentIsAddPartClick="getIsAddPartClick"
          :parentIsAddTitleClick="getIsAddTitleClick"
          parentId="choices01Id"
          childId="choices02Id"
        />
        <div class="text-center" v-if="isNew">
            <button type="button" @click="addData" class="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">Add</button>
        </div>
        <div class="text-center" v-else>
            <button type="button" @click="saveData" class="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">Save</button>
            <button type="button" @click="deleteData" class="btn btn-round bg-gradient-danger btn-lg w-100 mt-4 mb-0">Delete</button>
        </div>
    </form>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { TAuth01DataSingle } from '@/data'

import { hideForm01Modal, getForm01ModalEl } from '@/common/modal/form01Modal'

import { TItemParent, TItemChild } from '@/common/selector/related01Type'

import SelectorRelated01Type from '@/components/SelectorRelated01Type.vue'

import { currentDateFormat01 } from '@/common/date/currentDateFormat01'

import { authorValidate, TAuthor01Result } from '@/common/validate/author'

import { form01Validate } from '@/common/validate/form/form01'

@Options({

  props: {

    formItemModel: { type: Object },

    formKey: { type: Number },

    refData: { type: Object },

    isNew: { type: Boolean },

    parentData: { type: Array },

    childData: { type: Object }

  },

  data () {
    return {

      formItemNew: {} as TAuth01DataSingle,

      labelClassName: 'd-flex flex-row align-self-start',

      tipClass: 'd-flex flex-row align-self-start text-danger',

      baseTipClass: 'd-flex flex-row align-items-start mb-2 ms-1',

      userNameTipContent: '\xa0',

      showUserNameTip: false,

      emailTipContent: '\xa0',

      showEmailTip: false,

      partTipContent: '\xa0',

      showPartTip: false,

      titleTipContent: '\xa0',

      showTitleTip: false,

      isAddPartClick: false,

      isAddTitleClick: false

    }
  },

  mounted () {
    const modal = getForm01ModalEl()
    modal.addEventListener('hidden.bs.modal', (e: Event) => {
      this.userNameTipContent = '\xa0'
      this.emailTipContent = '\xa0'
      this.partTipContent = '\xa0'
      this.titleTipContent = '\xa0'
      this.isAddPartClick = false
      this.isAddTitleClick = false
    })
  },

  components: {

    SelectorRelated01Type

  },

  methods: {

    userNameValidate (): TAuthor01Result {
      return authorValidate.userName(this.getFormItem.uname)
    },

    emailValidate (): TAuthor01Result {
      return authorValidate.email(this.getFormItem.email)
    },

    partValidate (): TAuthor01Result {
      return authorValidate.department(this.getFormItem.partId)
    },

    titleValidate (): TAuthor01Result {
      return authorValidate.title(this.getFormItem.titleId)
    },

    addData () {
      this.getFormItem.avatar = '/assets/img/team-2.jpg' // set default avatar
      this.getFormItem.status = 12 // set default status 11 online  12 offline
      this.getFormItem.registime = currentDateFormat01() // set default time

      this.isAddPartClick = true
      this.isAddTitleClick = true

      const formValidate = form01Validate(this)

      if (!formValidate.result) {
        return false
      }

      this.refData.authorData.push(this.getFormItem)
      hideForm01Modal()
      return false
    },

    saveData () {
      const formValidate = form01Validate(this)

      if (!formValidate.result) {
        return false
      }

      hideForm01Modal()
      return false
    },

    deleteData () {
      this.refData.authorData.splice(this.formKey, 1)
      hideForm01Modal()
      return false
    },

    getFormItemSelected (): TAuth01DataSingle {
      if (this.isNew) {
        return this.formItemNew
      }
      return this.formItemModel
    },

    onUnameChange (): boolean {
      const validate = this.userNameValidate()
      if (!validate.result) {
        this.userNameTipContent = validate.msg
        this.showUserNameTip = validate.result
        return false
      }
      this.userNameTipContent = '\xa0'
      this.showUserNameTip = false
      return false
    },

    onEmailChange (): boolean {
      const validate = this.emailValidate()
      if (!validate.result) {
        this.emailTipContent = validate.msg
        this.showUseremailTip = validate.result
        return false
      }
      this.emailTipContent = '\xa0'
      this.showEmailTip = false
      return false
    }

  },

  computed: {

    getFormItem (): TAuth01DataSingle {
      if (this.isNew) {
        return this.formItemNew
      }
      return this.formItemModel
    },

    getIsAddPartClick (): boolean {
      return this.isAddPartClick
    },

    getIsAddTitleClick (): boolean {
      return this.isAddTitleClick
    }

  }

})

export default class Form01Modal extends Vue {
  formItemModel!: TAuth01DataSingle;

  formItemNew!: TAuth01DataSingle;

  formKey!: number;

  refData!: Record<string, unknown>;

  isNew!: boolean;

  addData!: () => boolean;

  saveData!: () => boolean;

  deleteData!: () => boolean;

  getFormItem!: TAuth01DataSingle;

  getFormItemSelected!: () => TAuth01DataSingle;

  parentData!: TItemParent;

  childData!: TItemChild;

  labelClassName!: string;

  onUnameChange!: () => boolean;

  onEmailChange!: () => boolean;

  onDepartmentChange!: () => void;

  onTitleChange!: () => void;

  tipClass!: string;

  showUserNameTip!: boolean;

  userNameTipContent!: string;

  showEmailTip!: boolean;

  emailTipContent!: string;

  partTipContent!: string;

  titleTipContent!: string;

  getIsAddPartClick!: boolean;

  getIsAddTitleClick!: boolean;
}

</script>
