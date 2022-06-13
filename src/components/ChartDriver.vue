<template>
  <chart-component :list="drivers">
  <template #header>
  <th>이름</th><th>소속팀</th><th>포인트</th>
  </template>
  <template #list="{row}">
  <td><img :src="require(`@/assets/driverimg/${row.picture}`)">{{ row.name }}</td>
  <td>{{ row.team }}</td>
  <td>{{ row.point }}</td>
  </template>
  </chart-component>
</template>

<script>
import ChartComponent from './Chart.vue'
import data from '../data.json'

export default {
  name: 'ChartDriver',
  components: {
    ChartComponent
  },
  data: function() {
    return {
      drivers: data.drivers.sort(function(a, b) {return b.point-a.point;})
    }
  }
}
</script>