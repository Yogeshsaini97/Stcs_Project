<template>
  <div>
    <HeaderList />
    <component :is="CurrentPage.fileName" :url="projectHostUrl" />
  </div>
</template>


<script setup>
import { onUpdated, provide, reactive, ref } from 'vue';
import ListPage from '../Global/ListPage.ce.vue';
import HeaderList from '../Global/HeaderList.ce.vue';


const CurrentPage = reactive({ fileName: ListPage, key: "ListPage" });
const ProjectApiId = ref(null);
const breadcrumbs = ref([
  { label: 'Programs' },
  { label: 'projects' }
]);
///////////////code for progress bar setting defined start here ///////////
const ProcessBarReactive = reactive({ actualValue:null, plannedValue:null ,display:false });
provide('ProcessBarReactive',ProcessBarReactive);
///////////////code for progress bar setting end here /////////////////////

const projectHostUrl = `http://localhost:8080/o/c/projectts/?p_auth=${Liferay.authToken}`

provide('CurrentPage', CurrentPage);
provide('ProjectApiId', ProjectApiId);
provide('breadcrumbs', breadcrumbs);

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log(CurrentPage.key)
})


const ChangePage = (PageToRender) => {
    console.log("changepage worked,",PageToRender)
  CurrentPage.fileName = PageToRender.fileName;
  CurrentPage.key = PageToRender.key;
  ///////////////setting of ProcessBarReactive start here/////////
  if(CurrentPage.key=="ProjectTabs")
  {
    ProcessBarReactive.actualValue=PageToRender?.item.progressActual;
    ProcessBarReactive.plannedValue=PageToRender?.item.progressPlanned;
    ProcessBarReactive.display=true;
  }
  ///////////////setting of ProcessBarReactive end here/////////
  // CurrentPage={PageToRender};
}

provide('ChangePage', ChangePage);

</script>


