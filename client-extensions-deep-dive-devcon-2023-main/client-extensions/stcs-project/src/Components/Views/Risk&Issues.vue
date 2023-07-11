<script setup>

import ListPage from '../../Listing/ListPage.ce.vue';



</script>

<template>
    <div class="RiskStart">
        <div class="Riskstartleft">
            <h2 style=" height:20%;display:flex;align-items: center;">Risks & Issues</h2>
            <div>
            <h3 style=" height:20%;display:flex;align-items: center;">Project title & Id</h3>
            <h6 style=" height:20%;display:flex;align-items: center;">lorem ipsuem lorem ipsuemlorem ipsuemlorem ipsuemlorem ipsuem</h6>
        </div>
        <div>
            <h1>12</h1>
            <h1>Issues</h1>
            <h1>3</h1>
            <h1>Risks</h1>
        </div>
        </div>
        <div class="RiskStartRIght">
            <ListPage :url="projectHostUrl" />
        </div>
    </div>
</template>