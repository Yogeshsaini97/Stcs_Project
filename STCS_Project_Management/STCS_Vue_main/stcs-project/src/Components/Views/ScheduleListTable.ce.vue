<template>
     <table class="table font-weight-600">
            <thead>
              <tr>
                <th>Status</th>
                <th>Task & ID</th>
                <th>Added by</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="userList.length > 0">




              <tr v-for="item in userList" :key="item.id">
                <td><p class="font-20 mb-1 line-height-8 font-weight-400">{{ GiveDayandmonthseperate(item.startDate).day  }}<br /><span class="font-12">{{ GiveDayandmonthseperate(item.startDate).formattedDate }}</span></p><span class="badge rounded-pill bg-light text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.scheduleStatus }}</span></td>
                <td>{{ item.scheduleName }}<br /><span class="font-weight-400">STCS - 149003090</span></td>
                <td>{{ item.creator.name }}<br /><span class="font-weight-400">{{ item.creator.contentType }}</span></td>
                <td>{{ formatTimeTo12HourFormat(item.dateCreated) }}</td>
                <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img" /></a></td>
              </tr>
             
             
            </tbody>
          </table>
    </template>


<script setup>
import { inject } from 'vue';
import { ChangeDateFormat } from '../../Utils/Utils';
import { formatTimeTo12HourFormat } from '../../Utils/Utils';
import { GiveDayandmonthseperate } from '../../Utils/Utils';


import ProjectTabs from "./ProjectTabs.ce.vue"


const ChangePage = inject("ChangePage");
const breadcrumbs = inject('breadcrumbs');

console.log("inside risk")
const userList = inject('userList');

console.log(userList)




const ProjectApiId = inject("ProjectApiId");




</script>