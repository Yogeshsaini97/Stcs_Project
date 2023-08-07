<script setup>
import { inject, onMounted } from "vue";
import listpage from "../../Global/ListPage.ce.vue"


onMounted(async () => {
    console.log("hello i am risk")
    });

const ProjectGetOneData = inject("ProjectGetOneData");
const no_of_Issues = inject("no_of_Issues");
const no_of_Risks = inject("no_of_Risks");
const ProjectApiId = inject("ProjectApiId");
const milestonesUrl = `http://localhost:8080/o/c/milestones/?p_auth=${Liferay.authToken}&filter=r_withMilestone_c_projecttId eq '${ProjectApiId.value}'`;

</script>

<template>
  <div class="row">
    <div class="col-md-3 border-right">
      <h2 class="mt-4 line-height-15">Project <br />Milestones</h2>
      <div class="mt-4">
        <p class="mb-1 text-default">Project title & ID</p>
        <p class="mb-0 font-weight-600">{{ ProjectGetOneData.projectTitle ?
          ProjectGetOneData.projectTitle : "NO data found" }}</p>
        <p>STCS - {{ ProjectGetOneData.id ?
          ProjectGetOneData.id : "NO data found" }}</p>
      </div>
      <div class="card bg-light shadow-none rounded-0 mnh-140p mt-4">
        <div class="card-body">
          <p class="mb-0 font-40 text-default">2<span class="font-20">/8</span></p>
          <p class="mb-0">Current milestone<img src="" class="ml-1 w-15p" alt="img" /></p>
          <p class="mb-0 font-8 opacity-60">Click to view more</p>
        </div>
      </div>
   
    </div>
    <div class="col-md-9">
      <div class="table-responsive mt-3">
    
        <listpage :url="milestonesUrl" />
      </div>
    </div>
  </div>
</template>