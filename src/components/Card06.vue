<template>
    <div class="card">
        <div class="card-header pb-0">
            <div class="row text-start">
                <div class="col-lg-6 col-7">
                  <h6>Projects</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-check text-info" aria-hidden="true"></i>
                    <span class="font-weight-bold ms-1">30 done</span> this month
                  </p>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                  <div class="dropdown float-lg-end pe-4">
                    <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-secondary"></i>
                    </a>
                    <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <div class="card-body px-0 pb-2">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                    <thead>
                    <tr class="text-start">
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="text-start" v-for="(item, index) in cardData01" :key="index">
                            <Detail01
                            :companyAvatar=item.company.avatar
                            :companyTitle=item.company.title
                            :companyAlt=item.company.alt
                            :budget=item.budget
                            :process=item.process
                            :members=item.members
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

import { getProjectsData, TProjectsData } from '@/data/projectsData'

import Detail01 from '@/components/Detail01.vue'

@Options({

  mounted () {
    getProjectsData(this)
  },

  components: {
    Detail01
  },

  data () {
    return {
      cardData01: {}
    }
  }

})

export default class Card06 extends Vue {
  cardData01!: TProjectsData;
}

</script>
