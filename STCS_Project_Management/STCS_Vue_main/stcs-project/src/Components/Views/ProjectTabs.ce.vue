<script setup>
import { createApp, inject, onMounted, provide, ref } from 'vue'
import Tabs from "../Tabs/Tabs.vue"
import Tab from "../Tabs/Tab.vue"
import Overview from "./Overview.vue"
import { fetchData } from '../../Utils/Utils';
import RiskIssues from './Risk&Issues.vue';
import Schedule from './Schedule.vue';
import ProjectDocuments from './ProjectDocuments.ce.vue';


const ProjectApiId = inject('ProjectApiId');



const ProjectGetOneData = ref(null);
const api1Data = ref(null);
const api2Data = ref(null);
const api3Data = ref(null);
const no_of_Risks = ref(0);
const no_of_Issues = ref(0);


const fetchMultipleApi = async () => {
  try {
    const [response1, response2, response3, response4] = await Promise.all([
      fetchData(`http://localhost:8080/o/c/projectts/${ProjectApiId.value}?p_auth=${Liferay.authToken}`),
      fetchData(`http://localhost:8080/o/c/risksandissues/?p_auth=${Liferay.authToken}&filter=r_withRiskAndIssues_c_projecttId eq '${ProjectApiId.value}'`),
      // fetch('api3-url'),
      // fetch('api4-url')
    ]);

    const data1 = response1;
    const data2 = response2;
    // const data3 = await response3.json();
    // const data4 = await response4.json();

    // Update the reactive variables with the fetched data
    ProjectGetOneData.value = data1;
    api2Data.value = data2;

    console.log(ProjectGetOneData.value)
    console.log(api2Data.value)

    // api3Data.value = data3;
    // api4Data.value = data4;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(async () => {
  await fetchMultipleApi();
  await find_num_of_risksnissues(api2Data.value)
})


provide("ProjectGetOneData", ProjectGetOneData)
provide("api2Data", api2Data)
// provide("ProjectGetOneData", ProjectGetOneData)

const find_num_of_risksnissues = (apiGot) => {
  console.log(apiGot)
  apiGot.items.forEach(element => {

    if (element.type == "Issue") {
      no_of_Issues.value++;
    }
    else if (element.type == "Risk") {
      no_of_Risks.value++;
    }


  });

}


provide("no_of_Issues", no_of_Issues);
provide("no_of_Risks", no_of_Risks);

</script>



<template>
  <Tabs>


    <Tab active="true" id="Overview" title="Overview">

      <div v-if="ProjectGetOneData">
        <Overview />
      </div>
    </Tab>
    <Tab title="Milestones" id="Milestones">
      Cras scelerisque, dolor vitae suscipit efficitur, risus orci sagittis velit, ac molestie nulla tortor id augue.
    </Tab>
    <Tab title="Risk & Issues" id="Risk_&_Issues">
      <div v-if="ProjectGetOneData">
        <RiskIssues />
      </div>
    </Tab>
    <Tab title="Documents">
      <div v-if="ProjectGetOneData">
        <ProjectDocuments/>
      </div>
     
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
      <div v-if="ProjectGetOneData">
        <Schedule/>
      </div>
     
    </Tab>



  </Tabs>
</template>



