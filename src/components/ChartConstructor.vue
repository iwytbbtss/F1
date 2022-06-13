<template>
  <chart-component :list="constructors">
  <template #header>
  <th>팀네임</th><th>카네임</th><th>포인트</th>
  </template>
  <template #list="{row}">
  <td>{{ row.name }}</td>
  <td>{{ row.car }}</td>
  <td>{{ row.point }}</td>
  </template>
  </chart-component>
</template>

<script>
import ChartComponent from './Chart.vue'
import data from '../data.json'

export default {
  name: 'ChartConstructor',
  components: {
    ChartComponent
  },
  data: function() {
    return {
      constructors: data.constructors.sort(function(a, b) {return b.point-a.point;})
    }
  }
}
</script>