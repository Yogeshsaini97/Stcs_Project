<template>
    <table class="table font-weight-600">
        <thead>
            <tr>
                <th>Status</th>
                <th>Program title & ID</th>
                <th>Progress (actual vs planned)</th>
                <th>Issues</th>
                <th>Risks</th>
                <th>Started</th>
                <th>Expected completion</th>
                <th></th>
            </tr>
        </thead>

        <tbody v-if="userList.length > 0">
            <tr v-for="item in userList" :key="item.id">
                <td><span class="badge rounded-pill bg-light-success font-10"><i
                            class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.statusActive }}</span></td>
                <td>{{ item.projectTitle }}<br /><span class="font-weight-400">STCS - {{ item.id }}</span></td>
                <td>
                    <div class="row">
                        <div class="col-6">
                            <p class="mb-0 font-10">Actual<span class="ml-2 text-danger">{{ item.progressActual }}%</span>
                            </p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0 text-right font-10">Planned<span class="ml-2 text-success">{{
                                item.progressPlanned }}%</span></p>
                        </div>
                        <div class="col-12">
                            <div class="progress h-5p">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10"
                                    :style="{ width: `${item.progressActual}%` }"></div>
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40"
                                    :style="{ width: `${item.progressPlanned}%` }"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>{{ item.issues }}</td>
                <td>{{ item.risks }}</td>
                <td>{{ ChangeDateFormat(item.startedDate) }}</td>
                <td>{{ ChangeDateFormat(item.expectedCompletion) }}</td>
                <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img"
                            @click="() => { ChangePage({ fileName: ProjectTabs, key: 'ProjectTabs',item}); ProjectApiId = item.id; 
                            breadcrumbs.push({ label: item.id }) }" /></a>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="7">End of Data</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { inject } from 'vue';
import { ChangeDateFormat } from '../../Utils/Utils';
import ProjectTabs from "./ProjectTabs.ce.vue"


const ChangePage = inject("ChangePage");
const breadcrumbs = inject('breadcrumbs');
const userList = inject('userList');
const ProjectApiId = inject("ProjectApiId");




</script>