<script setup>
import { ChangeDateFormat } from '../../Utils/Utils';


const props = defineProps({
    ProjectGetOneData: Object,
    required:true
})

console.log(props.ProjectGetOneData.projectOverview)

</script>


<template>

  
        <div class="row">
          <div class="col-md-3 border-right">
            <h2 class="my-4 line-height-15">Project<br />Overview</h2>
            <p class="text-default font-12">Project description</p>
            <p class="font-12">{{ props.ProjectGetOneData.projectOverview ?
                props.ProjectGetOneData.projectOverview : "NO data found" }}.</p>
          </div>
          <div class="col-md-9">
            <div class="mt-3">
              <table class="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th>Program title & ID</th>
                    <th>Project title & ID</th>
                    <th>Created on</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Installation & device with contract<br /><span class="font-weight-400">STCS - 000938</span>
                    </td>
                    <td>{{ props.ProjectGetOneData.projectTitle ?
                        props.ProjectGetOneData.projectTitle : "NO data found" }}<br /><span class="font-weight-400">STCS - {{ props.ProjectGetOneData.id ?
                            props.ProjectGetOneData.id : "NO data found" }}</span>
                    </td>
                    <td>{{ props.ProjectGetOneData.startedDate ?
                        ChangeDateFormat(props.ProjectGetOneData.startedDate) : "NO data found" }}<br /><span class="font-weight-400">12.35 pm</span></td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div class="row mt-4">
                <div class="col-md-4">
                  <div class="card grey mnh-140p mb-40">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-8">
                          <p class="mb-0 font-40 text-default">18%</p>
                      <p class="mb-0">Completed</p>
                      <p class="mb-0 font-8 opacity-60">Overall health</p>
                        </div>
                        <div class="col-md-4">
                          <span class="badge rounded-pill bg-light-danger float-end font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>Delayed</span>
                        </div>
                      </div>
                      <div>
                        <p class="mb-0 text-right font-10">18%</p>
                        <div class="progress h-5p">
                          <div class="progress-bar bg-grey" role="progressbar" aria-valuenow="18" style="width: 18%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card grey mnh-140p mb-40">
                    <div class="card-body">
                      <p class="mb-0 font-40 text-default">2<span class="font-20">/8</span></p>
                      <p class="mb-0">Current milestone<img src="../../assets/images/arrow-up.svg" class="ml-1 w-15p" alt="img" /></p>
                      <p class="mb-0 font-8 opacity-60">Click to view more</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card grey mnh-140p mb-40">
                    <div class="card-body">
                      <p class="font-10 text-default">Upcoming milestones</p>
                      <div class="d-flex">
                        <div class="rectangle-green">
                          <p class="mb-0 line-height-10 font-16">23</p>
                          <p class="mb-0 line-height-10 font-10">apr</p>
                        </div>
                        <div class="ml-2 mt-2">
                          <p class="mb-0 line-height-10 font-12">Milestone 3</p>
                          <p class="mb-0 font-10">15 days left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card grey mnh-140p mb-40">
                    <div class="card-body">
                      <p class="mb-0 font-40 text-default">12</p>
                      <p class="mb-0">Issues<img src="../../assets/images/arrow-up.svg" class="ml-1 w-15p" alt="img" /></p>
                      <p class="mb-0 font-8 opacity-60">You have <span class="text-danger">12 severe</span> issues</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card grey mnh-140p mb-40">
                    <div class="card-body">
                      <p class="mb-0 font-40 text-default">3</p>
                      <p class="mb-0">Risks<img src="../../assets/images/arrow-up.svg" class="ml-1 w-15p" alt="img" /></p>
                      <p class="mb-0 font-8 opacity-60">You have <span class="text-danger">3 extreme</span> risks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
   

</template>