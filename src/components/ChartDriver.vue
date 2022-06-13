<template>
  <chart-component :list="this.$store.getters.getCSDrivers">
    <template #header>
      <th>이름</th><th>소속팀</th><th>포인트</th>
    </template>
    <template #list="{row}">
      <td><img :src="row.driver.image">{{ row.driver.name }}</td>
      <td>{{ row.team.name }}</td>
      <td>{{ row.points }}</td>
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
}
</script>