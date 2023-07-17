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
const breadcrumbs = ref([
  { label: 'Programs' },
  { label: 'projects' }
]);
const ProjectApiId = ref(null);


const projectHostUrl = `http://localhost:8080/o/c/projectts/?p_auth=${Liferay.authToken}`

provide('CurrentPage', CurrentPage);
provide('ProjectApiId', ProjectApiId);
provide('breadcrumbs', breadcrumbs);




onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log(CurrentPage.key)
})


const ChangePage = (PageToRender) => {

  CurrentPage.fileName = PageToRender.fileName;
  CurrentPage.key = PageToRender.key;
  // CurrentPage={PageToRender};
}

provide('ChangePage', ChangePage);

</script>




