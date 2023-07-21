<template>

   
      <!-- ----------------   -->
      <div class="breadcrumb bg-default text-white pt-3 pb-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 d-flex">
              <a href="javascript:void(0)" class="btn btn-primary align-center rounded-10"  @click="BackButton()"><img src="../../assets/images/angle-right-white.svg" alt="img" /></a>
              <div class="ml-4">
                <h4 class="mb-0">Projects</h4>

                      <p class="breadcrumbmain mb-0 font-10" >
                        <li>Dashboard</li>
                        <li v-for="(item, index) in breadcrumbs" :key="index" >
                          <span > <img src="http://localhost:8080/documents/d/guest/angle-right"
                            class="mx-1 opacity-60" alt="img" /> {{ item.label }}</span>
                        </li>
                      </p>
                  
                    
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end z-index-9 mt-1">
               <!--Data loader start here-->
               <progress-bar actualValue=50 plannedValue=70 />
               <!--Data Loader end here-->
              <a href="javascript:void(0)" class="btn btn-primary align-center rounded-10"><img src="../../assets/images/filter-white.svg" alt="img" /></a>
              <a href="javascript:void(0)" class="btn btn-primary align-center rounded-10 ml-4"><img src="../../assets/images/cloud-download-white.svg" alt="img" /></a>
              <a href="javascript:void(0)" class="btn btn-light align-center rounded-10 ml-4 text-default"><img src="../../assets/images/headset.svg" class="mr-3" alt="img" />Talk to us<img src="../../assets/images/angle-right.svg" class="ml-3" alt="img" /></a>
            </div>
          </div>
        </div>
      </div>


  
      
</template>

<script setup>
import { inject, ref } from 'vue';
import ListPage from './ListPage.ce.vue';


const CurrentPage = inject('CurrentPage');
const ChangePage = inject('ChangePage');
const breadcrumbs = inject('breadcrumbs');



const BackButton=()=>
{

  // ChangePage({fileName:ListPage,key:'ListPage'})
  if(CurrentPage.key==="ListPage")
  {
    
    console.log("hey buddy")
    //kept for further chnages
  }
  else if(CurrentPage.key==="ProjectTabs")
  {
    ChangePage({fileName:ListPage,key:'ListPage'})
    console.log(breadcrumbs.value)
    breadcrumbs.value.pop();
   
  }







 



} 






















</script>

