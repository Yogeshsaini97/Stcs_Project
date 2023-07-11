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
import ProjectTabs from './ProjectTabs.ce.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const CurrentPage = reactive({fileName:ListPage,key:"ListPage"});
const ProjectApiId=ref(null);


const projectHostUrl = `http://localhost:8080/o/c/projectts/?p_auth=${Liferay.authToken}`

provide('CurrentPage', CurrentPage);
provide('ProjectApiId', ProjectApiId);








onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log(CurrentPage.key)
})


const ChangePage=(PageToRender)=>
{

  CurrentPage.fileName=PageToRender.fileName;
  CurrentPage.key=PageToRender.key;
  // CurrentPage={PageToRender};

}



provide('ChangePage', ChangePage);







</script>




