<script setup>
import { inject } from "vue";
import listpage from "../Global/ListPage.ce.vue"



const props = defineProps({

ProjectGetOneData: {
    type: Object,
    required: true
  },
  ProjectApiId: {
    type: String,
    required: true
  },
})

const no_of_Issues =inject("no_of_Issues");
const no_of_Risks =inject("no_of_Risks");






const RisknIssuesUrl=`http://localhost:8080/o/c/risksandissues/?p_auth=${Liferay.authToken}&filter=r_withRiskAndIssues_c_projecttId eq '${props.ProjectApiId}'`;




</script>

<template>
   
        <div class="row">
          <div class="col-md-3 border-right">
            <h2 class="mt-4 line-height-15">Risks &<br />Issues</h2>
            <div class="mt-4">
              <p class="mb-1 text-default">Project title & ID</p>
              <p class="mb-0 font-weight-600">{{ props.ProjectGetOneData.projectTitle ?
                props.ProjectGetOneData.projectTitle : "NO data found" }}</p>
              <p>STCS - {{ props.ProjectGetOneData.id ?
                props.ProjectGetOneData.id : "NO data found" }}</p>
            </div>
            <div class="card bg-light shadow-none rounded-0 mnh-140p mt-4">
              <div class="card-body">
                <p class="mb-0 font-40 text-default">{{ no_of_Issues }}</p>
                <p class="mb-0">Issues<img src="../../assets/images/arrow-up.svg" class="ml-1" alt="img" /></p>
                <p class="mb-0 font-8 opacity-60">You have <span class="text-danger"> {{ no_of_Issues }}severe</span> issues</p>
              </div>
            </div>
            <div class="card bg-light shadow-none rounded-0 mnh-140p mt-4">
              <div class="card-body">
                <p class="mb-0 font-40 text-default">{{ no_of_Risks}}</p>
                <p class="mb-0">Risks<img src="../../assets/images/arrow-up.svg" class="ml-1" alt="img" /></p>
                <p class="mb-0 font-8 opacity-60">You have <span class="text-danger">{{ no_of_Risks}} extreme</span> risks</p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="table-responsive mt-3">
              <!-- <table class="table font-weight-600">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Severity</th>
                    <th>Title & ID</th>
                    <th>Requested by</th>
                    <th>Raised on</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="badge rounded-pill bg-light-orange text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Escalated</span></td>
                    <td>Issue</td>
                    <td><span class="text-danger">Severe</span></td>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span></td>
                    <td>John Doe<br /><span class="font-weight-400">STCS - Technical Support</span></td>
                    <td>Mar 28th, 2023</td>
                    <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
                  </tr>
                  <tr>
                    <td><span class="badge rounded-pill bg-light-success text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Open</span></td>
                    <td>Issue</td>
                    <td><span class="text-orange">High</span></td>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span></td>
                    <td>John Doe<br /><span class="font-weight-400">STCS - Technical Support</span></td>
                    <td>Mar 28th, 2023</td>
                    <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
                  </tr>
                  <tr>
                    <td><span class="badge rounded-pill bg-light-success text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Open</span></td>
                    <td>Risk</td>
                    <td><span class="text-light-default">Medium</span></td>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span></td>
                    <td>John Doe<br /><span class="font-weight-400">STCS - Technical Support</span></td>
                    <td>Mar 28th, 2023</td>
                    <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
                  </tr>
                  <tr>
                    <td><span class="badge rounded-pill bg-light-default text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Resolved</span></td>
                    <td>Issue</td>
                    <td><span class="text-grey">Low</span></td>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span></td>
                    <td>John Doe<br /><span class="font-weight-400">STCS - Technical Support</span></td>
                    <td>Mar 28th, 2023</td>
                    <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
                  </tr>
                  <tr>
                    <td><span class="badge rounded-pill bg-light-default text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Resolved</span></td>
                    <td>Risk</td>
                    <td><span class="text-grey">Low</span></td>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span></td>
                    <td>John Doe<br /><span class="font-weight-400">STCS - Technical Support</span></td>
                    <td>Mar 28th, 2023</td>
                    <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
                  </tr>
                </tbody>
              </table> -->
              <listpage :url="RisknIssuesUrl" />
            </div>
          </div>
        </div>
  
</template>