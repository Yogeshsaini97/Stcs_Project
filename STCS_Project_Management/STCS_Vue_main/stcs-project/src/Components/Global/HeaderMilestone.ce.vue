<template>
    <div class="Header-start">
        <div class="Header-box" style="margin-left:4rem;">
          <div class="Header-innderbox"><button @click="BackButton()">Back</button></div>
  
          <div class="Header-innderbox">
            <!-- <div>{{ keyName.Name }}</div> -->
            <!-- <div class="Navigation-list">Dashboard > Programs > {{ keyName.NavUrl }}</div> -->
          </div>
        </div>
        <div class="Header-box " style="margin-right:2rem;">
          <div class="Header-innderbox"><button>Filter</button></div>
          <div class="Header-innderbox"><button>Download</button></div>
          <div class="Header-innderbox"><button>talk to us</button></div>
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
  }
  else if(CurrentPage.key==="ProjectTabs")
  {
    ChangePage({fileName:ListPage,key:'ListPage'})
   
  }

 



} 






















</script>

