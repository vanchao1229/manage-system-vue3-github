<template>
<label :class="labelClassName">Department</label>
<div>
  <select
    :id="parentId"
    :parentData="parentData"
    v-model.lazy="getFormItem.partId"
    @change="parentOnChange"
  >
  </select>
</div>
<small :class="tipClass">{{ getPartTipContent }}</small>
<label :class="labelClassName">Title</label>
<div class="mb-3">
  <select
    :id="childId"
    :childData="childData"
    v-model.lazy="getFormItem.titleId"
    @change="childOnChange"
  >
  </select>
</div>
<small :class="tipClass">{{ getTitleTipContent }}</small>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { createSelector, TItemParent, TItemChild } from '@/common/selector/related01Type'

import { getForm01ModalEl } from '@/common/modal/form01Modal'

import Choices from 'choices.js/public/assets/scripts/choices.js'

import { TAuth01DataSingle } from '@/data'

import { authorValidate } from '@/common/validate/author'

@Options({

  props: {

    formItemModel: { type: Object },

    parentId: { type: String },

    childId: { type: String },

    parentModel: { type: String },

    childModel: { type: String },

    parentData: { type: Array },

    childData: { type: Object },

    isNew: { type: Boolean },

    tipClass: { type: String },

    parentPartTipContent: { type: String },

    parentTitleTipContent: { type: String },

    parentIsAddPartClick: { type: Boolean },

    parentIsAddTitleClick: { type: Boolean }

  },

  data () {
    return {

      formItemNew: {} as TAuth01DataSingle,

      parentDataArray: [],

      parentSelector: {} as Choices,

      childSelector: {} as Choices,

      labelClassName: 'd-flex flex-row align-self-start',

      partTipContent: '\xa0',

      titleTipContent: '\xa0',

      isAddPartClick: true,

      isAddTitleClick: true

    }
  },

  mounted () {
    // console.log('Selector 01 mounted')

    this.parentSelector = createSelector(this.parentId)

    this.childSelector = createSelector(this.childId)

    const parentData = this.parentData ? this.parentData : [{}]

    this.parentSelector.setChoices(parentData)

    this.childSelector.setChoices([{}])

    const childData = this.childData ? this.childData : {}

    this.parentDataArray = [] as Array<string>

    const modal = getForm01ModalEl()
    modal.addEventListener('hidden.bs.modal', (e: Event) => {
      this.partTipContent = '\xa0'
      this.titleTipContent = '\xa0'
    })

    for (const key in parentData) {
      this.parentDataArray.push(parentData[key].value)
    }

    this.childSelector.disable()
    this.parentSelector.passedElement.element.addEventListener('change', (e: any) => {
      this.childSelector.clearStore()

      if (this.parentDataArray.indexOf(e.detail.value) !== -1) {
        this.childSelector.setChoices(childData[e.detail.value])

        this.childSelector.enable()

        return false
      }

      return false
    })

    this.parentSelector.passedElement.element.addEventListener('hideDropdown', (e: any) => {
      this.isAddPartClick = false
      const validate = authorValidate.department(this.getFormItem.partId)
      this.partTipContent = '\xa0'
      if (!validate.result) this.partTipContent = validate.msg
    })

    this.childSelector.passedElement.element.addEventListener('hideDropdown', (e: any) => {
      this.isAddTitleClick = false
      this.titleTipContent = '\xa0'
      const validate = authorValidate.title(this.getFormItem.titleId)
      if (!validate.result) this.titleTipContent = validate.msg
    })
  },

  watch: {
    getFormItem: {
      handler (newItem, oldItem) {
        if (!this.isNew) {
          this.parentSelector.setChoiceByValue(this.formItemModel.partId)
          this.childSelector.clearStore()

          if (this.parentDataArray.indexOf(this.formItemModel.partId) !== -1) {
            this.childSelector.setChoices(this.childData[this.formItemModel.partId])

            this.childSelector.enable()
            this.childSelector.setChoiceByValue(this.formItemModel.titleId)
          }
          return true
        }
        if (this.isNew) {
          const parentSelector = this.parentSelector

          const childSelector = this.childSelector

          const childData = this.childData

          // const parentDataArray = this.parentDataArray

          const itemCondition01 = oldItem?.partId > 0 && oldItem?.titleId > 0 && newItem?.partId === undefined && newItem?.titleId === undefined
          if (itemCondition01) {
            parentSelector.removeActiveItemsByValue(oldItem?.partId)
            childSelector.removeActiveItemsByValue(oldItem?.titleId)
            childSelector.disable()
          }

          const itemCondition02 = oldItem?.partId > 0 && oldItem?.titleId > 0 && newItem?.partId !== undefined && newItem?.titleId === undefined
          if (itemCondition02) {
            childSelector.removeActiveItemsByValue(oldItem?.titleId)
            parentSelector.setChoiceByValue(newItem?.partId)
            childSelector.clearStore()
            childSelector.setChoices(childData[newItem?.partId])
          }

          if (newItem?.titleId !== undefined) {
            childSelector.setChoiceByValue(newItem?.titleId)
          }

          if (newItem?.titleId !== undefined) {
            parentSelector.setChoiceByValue(newItem?.partId)
            childSelector.clearStore()
            childSelector.setChoices(childData[newItem?.partId])
          }

          if (newItem?.titleId !== undefined) {
            childSelector.setChoiceByValue(newItem?.titleId)
          }

          return true
        }
      },
      deep: true
    }
  },

  methods: {
    parentOnChange (): void {
      // console.log(`parentOnChange value is ${this.parentSelector.getValue(true)}`)
      // console.log(`parentOnChange value is ${this.getFormItem.partId}`)
    },

    childOnChange (): void {
      // console.log(`childOnChange value is ${this.childSelector.getValue(true)}`)
      // console.log(`childOnChange value is ${this.getFormItem.titleId}`)
    }

  },

  computed: {

    getFormItem (): TAuth01DataSingle {
      return this.formItemModel
    },

    getPartTipContent (): string {
      if (this.getIsAddPartClick) {
        return this.parentPartTipContent
      }
      return this.partTipContent
    },

    getTitleTipContent (): string {
      if (this.getIsAddTitleClick) {
        return this.parentTitleTipContent
      }
      return this.titleTipContent
    },

    getIsAddPartClick (): boolean {
      return this.parentIsAddPartClick && this.isAddPartClick
    },

    getIsAddTitleClick (): boolean {
      return this.parentIsAddTitleClick && this.isAddTitleClick
    }

  }

})

// Related 2 dimension selector
export default class selectorRelated01Type extends Vue {
    parentId!: string;

    childId!: string;

    parentModel!: string;

    childModel!: string;

    parentData!: TItemParent;

    childData!: TItemChild;

    parentOnChange!: () => void;

    childOnChange!: () => void;

    formItemModel!: TAuth01DataSingle;

    formItemNew!: TAuth01DataSingle;

    getFormItem!: TAuth01DataSingle;

    labelClassName!: string;

    tipClass!: string;

    partTipContent!: string;

    titleTipContent!: string;

    parentPartTipContent!: string;

    parentTitleTipContent!: string;

    getPartTipContent!: string;

    getTitleTipContent!: string;

    getIsAddPartClick!: boolean;

    getIsAddTitleClick!: boolean;

    parentIsAddPartClick!: boolean;

    parentIsAddTitleClick!: boolean;
}

</script>

<style lang="scss">
  /**
   * variable define
   */
  $white: #fff;
  $margin-x: 0.5rem;

  .choices {
    text-align: start;
    &[data-type*=select-one]   {
      .choices__input {
        border-bottom: 0;
      }
    }
    .choices__inner {
      background-color: $white;
      border-radius: 8px;
    }
    .choices__list--dropdown, .choices__list[aria-expanded] {
      border-radius: 4px;
      border: none;
    }
    .choices__list--dropdown {
      width: calc(100% + 6px);
      left: -3px;
      margin: 0 auto;
      opacity: 0;
      transition: visibility .25s, opacity .25s,transform .25s;
      transform-origin: 50% 0;
      transform: perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0,1px,0)!important;
      &.is-active {
        opacity: 1;
      }
    }
    .choices__list--dropdown, .choices__list[aria-expanded] {
      .choices__item--selectable {
        &.is-highlighted {
          border-radius: 8px;
        }
      }
    }
  }
</style>
