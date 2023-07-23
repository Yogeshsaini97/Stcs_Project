<template >
  <table class="table font-weight-600">
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

    <tbody v-if="userList.length > 0">
      <tr v-for="item in userList" :key="item.id">
        <td><span class="badge rounded-pill bg-light-success font-10"><i
              class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.rIskStatus }}</span></td>
        <td class="font-weight-800">{{ item.type }}<br /></td>

        <td>{{ item.severity }}</td>
        <td>{{ item.title }}<br /><span class="font-weight-400">STCS - {{ item.id }}</span></td>
        <td>{{ item.requestedBy }}</td>
        <td>{{ ChangeDateFormat(item.raisedOn) }}</td>

        <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img"
              @click="() => { ChangePage({ fileName: ProjectTabs, key: 'ProjectTabs' }); ProjectApiId = item.id }" /></a>
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

console.log("inside risk")
const userList = inject('userList');




const ProjectApiId = inject("ProjectApiId");




</script>