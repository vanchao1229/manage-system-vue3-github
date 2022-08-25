<template>
    <div class="row text-start">
        <div class="col-12">
            <div class="card mb-4 author-list">
                <div class="card-header pb-0 d-flex flex-row">
                  <h6>Authors list</h6>
                  <i class="ni ni-fat-add text-lg opacity-10 ms-1 author-add-icon" @click="setNewItem"></i>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                                <th class="text-secondary opacity-7"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, key) in authorData" :key="key">
                                    <td>
                                        <div class="d-flex px-2 py-1">
                                        <div>
                                            <img :src="item.avatar" class="avatar avatar-sm me-3" :alt="item.uname">
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ item.uname }}</h6>
                                            <p class="text-xs text-secondary mb-0">{{ item.email }}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">
                                          {{
                                            (() => {
                                              return getJobTitleLabel(item.partId, item.titleId)
                                            })()
                                          }}
                                          </p>
                                        <p class="text-xs text-secondary mb-0">
                                          {{
                                            (() => {
                                              return getPartLabel(item.partId)
                                            })()
                                          }}
                                        </p>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span :class="getStatusClass(item.status)">
                                            {{
                                                (() => {
                                                  return getStatusName(item.status)
                                                })()
                                            }}
                                        </span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">{{ item.registime }}</span>
                                    </td>
                                    <td class="align-middle">
                                        <a href="javascript:;" @click="setItem(key, item)" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                        Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Form01Modal
      :formItemModel="getItem()"
      :formKey="getKey()"
      :refData="getRefData()"
      :isNew="getIsNew()"
      :parentData="selectorParentData"
      :childData="selectorChildData"
    />
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { auth01Data, TAuth01Data, TAuth01DataSingle } from '@/data'

import { getStatusName, TGetStatusName } from '@/common/vue/methods/card08/getStatusName'

import { getStatusClass, TGetStatusClass } from '@/common/vue/methods/card08/getStatusClass'

import { TItemParent, TItemChild, IItemSingle } from '@/common/selector/related01Type'

import Form01Modal from '@/components/Form01Modal.vue'

import { showForm01Modal } from '@/common/modal/form01Modal'

import { department, jobTitle } from '@/data/card08'

import store from '@/store'

@Options({

  created () {
    this.selectorParentData = department

    this.selectorChildData = jobTitle
  },

  mounted () {
    const _data = auth01Data()

    this.authorData = _data
  },

  components: {

    Form01Modal

  },

  data () {
    return {

      authorData: {},

      key: -9999,

      item: {},

      isNew: false,

      isNewClicked: false,

      selectorParentData: [],

      selectorChildData: {}

    }
  },

  methods: {

    getStatusClass: getStatusClass,

    getStatusName: getStatusName,

    setItem (key: number, item: TAuth01DataSingle): void {
      // console.log(key)
      // invoke editor modal
      this.item = item
      this.key = key
      this.isNew = false
      showForm01Modal()
    },

    setNewItem (): void {
      this.isNew = true
      store.commit('setModal01IsClickedNew', true)
      showForm01Modal()
    },

    getItem (): TAuth01DataSingle {
      return this.item
    },

    getKey (): number {
      return this.key
    },

    getIsNew (): boolean {
      return this.isNew
    },

    getRefData (): Record<string, unknown> {
      return this
    },

    getPartLabel (parentId: string): string {
      const [item] = this.selectorParentData?.filter(
        (p: IItemSingle) => {
          return p.value === parentId
        })
      return item?.label
    },

    getJobTitleLabel (parentId: string, childId: string): string {
      const [item] = this.selectorChildData[parentId]?.filter(
        (p: IItemSingle) => {
          return p.value === childId
        })
      return item?.label
    }

  }

})

export default class Card08 extends Vue {
  authorData!: TAuth01Data;

  getStatusClass!: TGetStatusClass;

  getStatusName!: TGetStatusName;

  setItem!: (arg01: number, arg02: TAuth01DataSingle) => void;

  setNewItem!: () => void;

  getItem!: () => TAuth01DataSingle;

  getKey!: () => number;

  getRefData!: () => Record<string, unknown>;

  getIsNew!: () => boolean;

  getJobTitleLabel!: (arg01: string, arg02: string) => string;

  getPartLabel!: (arg01: string) => string;

  selectorParentData!: TItemParent;

  selectorChildData!: TItemChild;
}
</script>

<style lang="scss">
.author-list {
  .author-add-icon {
    $primary-color: #cb0c9f;
    position: relative;
    color: $primary-color;
    cursor: pointer;
    margin-top: 3.5px;
  }
}
</style>
