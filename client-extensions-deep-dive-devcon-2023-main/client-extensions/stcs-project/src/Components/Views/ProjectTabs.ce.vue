<script setup>
  import { createApp, inject, onMounted, provide, ref } from 'vue'
	import Tabs from "../Tabs/Tabs.vue"
	import Tab from "../Tabs/Tab.vue"
  import Overview from "./Overview.vue"
  import { fetchData } from '../../Utils/Utils';
import RiskIssues from './Risk&Issues.vue';


  const ProjectApiId = inject('ProjectApiId');
  const ProjectGetOneData=ref(null)

onMounted(async () => {
  console.log("ren")
  console.log(ProjectApiId)
  console.log(ProjectApiId.value)
      try {
        const response = await fetchData(`http://localhost:8080/o/c/projectts/${ProjectApiId.value}?p_auth=${Liferay.authToken}`);
        console.log(response)
        ProjectGetOneData.value=response;
       
          }
      catch (error) {
        console.error(error);
      }
    });




    







</script>



<template>

  <Tabs>
    
  	<Tab active="true" title="Overview">

<div v-if="ProjectGetOneData"><Overview :ProjectGetOneData="ProjectGetOneData"/></div>
    </Tab>
  	<Tab title="Milestones">
      Cras scelerisque, dolor vitae suscipit efficitur, risus orci sagittis velit, ac molestie nulla tortor id augue.
    </Tab>
  	<Tab title="Risk & Issues">
      <div v-if="ProjectGetOneData"><RiskIssues :ProjectGetOneData="ProjectGetOneData"/></div>
    </Tab>
  	<Tab title="Documents">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
    <Tab title="Approvals">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
    <Tab title="Invoices">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
    <Tab title="Stakeholders">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
    <Tab title="Schedule">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
    


  </Tabs>
	
</template>



