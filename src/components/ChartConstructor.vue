<template>
  <chart-component :list="selected" class="chart_constructor">
    <template #header>
      <th></th>
      <th>팀네임</th>
      <th>포인트</th>
    </template>
    <template #list="{row}">
      <td><img :src="row.team.logo"></td>
      <td>{{ row.team.name }}</td>
      <td>{{ row.points ? row.points : 0 }}</td>
    </template>
  </chart-component>
</template>

<script>
import ChartComponent from './Chart.vue'


export default {
  name: 'ChartConstructor',
  components: {
    ChartComponent
  },
  props: {
    selected: Array
  }
}
</script>

<style scoped>
  .chart_constructor {
    width: fit-content;
  }
</style>