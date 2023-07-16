<template>

   
      <!-- ----------------   -->
      <div class="breadcrumb bg-default text-white pt-3 pb-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 d-flex">
              <a href="javascript:void(0)" class="btn btn-primary align-center rounded-10"  @click="BackButton()"><img src="../../assets/images/angle-right-white.svg" alt="img" /></a>
              <div class="ml-4">
                <h4 class="mb-0">Projects</h4>

            
                <p class="mb-0 font-10">
                  <span class="opacity-60">Dashboard</span>
                  <img src="../../assets/images/angle-right.svg"
                    class="mx-1" alt="img" />
                    <span class="opacity-60">Programs</span>
                    <img src="../../assets/images/angle-right.svg"
                    class="mx-1" alt="img" />Projects</p>
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
import { inject } from 'vue';
import ListPage from './ListPage.ce.vue';

const CurrentPage = inject('CurrentPage');
const ChangePage = inject('ChangePage');

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
   
  }

 



} 






















</script>

