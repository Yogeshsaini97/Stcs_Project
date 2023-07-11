<script setup>

const props = defineProps({
    ProjectGetOneData: Object,
    required:true
})

console.log(props.ProjectGetOneData.projectOverview)

</script>


<template>
    <div class="RiskStart">
        <div class="Riskstartleft">
            <h2 style=" height:20%;display:flex;align-items: center;">Project Overview</h2>
            <div style=" height:20%;display:flex;align-items: center;">{{ props.ProjectGetOneData.projectOverview ? props.ProjectGetOneData.projectOverview : "NO data found"  }}</div>
        </div>
        <div class="RiskStartRIght">
            <div style="height:20%;display: flex;
            align-content: center;
            justify-content: space-between;
            align-items: center;
            border-bottom: groove;">
                <div >one</div>
                <div  >two</div>
                <div >three</div>

            </div>
            <div style="height: 80%;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;">
                <div style=" solid;height:20%;display: flex;
                align-content: center;
                justify-content: space-between;
                align-items: center;">
                <div >one</div>
                    <div >two</div>
                    <div >three</div>

                </div>
                <div style="height:20%;display: flex;
                align-content: center;
                align-items: center;
                justify-content: space-evenly;">

                    <div >one</div>
                    <div  >two</div>


                </div>

            </div>
        </div>
    </div>
</template>