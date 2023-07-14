<template>
<div class="row">
    <div class="col-6">
      <p class="mb-0 font-10">Actual<span class="ml-2 text-danger">{{ actualValue }}%</span></p>
    </div>
    <div class="col-6">
      <p class="mb-0 text-right font-10">Planned<span class="ml-2 text-success">{{ plannedValue}}%</span></p>
    </div>
    <div class="col-12">
      <div class="progress h-5p">
      <div class="progress-bar bg-danger" role="progressbar" :aria-valuenow="actualValue"
        :style="'width: ' + actualValue + '%'"></div>
      <div class="progress-bar bg-success" role="progressbar" :aria-valuenow="plannedValue"
        :style="'width: ' + plannedValue + '%'"></div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
  actualValue: {
    type: Number,
      required: true,
    },
    plannedValue: {
      type: Number,
      required: true,
    },
  },
  setup(props){
    console.log("props.actualValue",props.actualValue,props.plannedValue);
   return{
    actualValue:props.actualValue,
    plannedValue:props.plannedValue
   }
  }
}
</script>


<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
</style>