<template>
  <chart-component :list="selected" class="chart_driver">
    <template #header>
      <th></th>
      <th>이름</th>
      <th>소속팀</th>
      <th>포인트</th>
    </template>
    <template #list="{row}">
      <td class="chart_img"><img :src="row.driver.image"></td>
      <td>{{ row.driver.name }}</td>
      <td>{{ row.team.name }}</td>
      <td>{{ row.points ? row.points : 0 }}</td>
    </template>
  </chart-component>
</template>

<script>
import ChartComponent from './Chart.vue'

export default {
  name: 'ChartDriver',
  components: {
    ChartComponent
  },
  props: {
    selected: Array
  }
}
</script>

<style>
  .chart_driver {
    width: fit-content;
  }
</style>