<template>
    <div id="chart">
        <!-- <select v-model="selectedYear">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
        <button>검색</button> -->
        <ChartDriver :selected="$store.getters.getCSDrivers" />
        <ChartConstructor :selected="$store.getters.getCSConstructors" />
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
            selectedYear: this.$store.getters.getCurrentSeason,
            years: [],
        }
    },
    created() {
        for(let i=this.$store.getters.getCurrentSeason; i>=2011; i--) {
            this.years.push(i);
        }
    },
    methods: {
        // commitYear() {
        //     if(this.selectedYear==this.$store.getters.getCurrentSeason) {
        //         this.driverList=this.$store.getters.getCSDrivers;
        //         this.constructorList=this.$store.getters.getCSConstructors;
        //     }
        //     else {
        //         this.$store.dispatch('getSSDriversAPI', this.selectedYear);
        //         this.$store.dispatch('getSSConstructorsAPI', this.selectedYear);
        //     }
        // }
    }
}
</script>

<style scoped>
    #chart {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>