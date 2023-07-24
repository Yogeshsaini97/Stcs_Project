
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







<template>
    <table class="table font-weight-600">
        <thead>
          <tr>
            <th>Status</th>
            <th>Category</th>
            <th>Title & ID</th>
            <th>Added by</th>
            <th>Added on</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="userList.length > 0">
          <tr  v-for="item in userList" :key="item.id">
            <td><span class="badge rounded-pill bg-light-success text-dark font-10"><i class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.documentStatus }}</span></td>
            <td>{{ item.category }}</td>
            <td>{{ item.documentName }}<br /><span class="font-weight-400">STCS - {{ item.id }}</span></td>
            <td>{{ item.creator.name }}<br /><span class="font-weight-400">STCS - {{ item.creator.contentType }}</span></td>
            <td>{{ ChangeDateFormat(item.dateCreated) }}</td>
            <td><a :href="`http://localhost:8080/${item.attachment.link.href}`"><img src="http://localhost:8080/documents/d/guest/arrow-up" alt="img" /></a></td>
          </tr>
          
        </tbody>
      </table>
   
</template>


