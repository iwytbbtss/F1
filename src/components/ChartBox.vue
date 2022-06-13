<template>
    <div id="chart">
        <span @click="isDriver=true">드라이버 챔피언쉽</span>
        <span @click="isDriver=false">컨스트럭터 챔피언쉽</span>
        <ChartDriver v-if="isDriver"/>
        <ChartConstructor v-else/>
    </div>
</template>

<script>
import ChartDriver from './ChartDriver.vue'
import ChartConstructor from './ChartConstructor.vue'

export default {
    name: 'ChartBox',
    components: {
        ChartDriver,ChartConstructor
    },
    data: function() {
        return {
            isDriver: true
        }
    }
}
</script>

<style scoped>
#chart {
    margin: 50px 200px;
}

span {
    float: left;
    background-color: beige;
    border-radius: 20px 20px 0 0;
    padding: 8px;
    font-size: 14px;
}
</style>