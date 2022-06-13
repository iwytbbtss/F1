<template>
  <chart-component :list="this.$store.getters.getCSConstructors">
    <template #header>
      <th>팀네임</th><th>포인트</th>
    </template>
    <template #list="{row}">
      <td><img :src="row.team.logo">{{ row.team.name }}</td>
      <td>{{ row.points }}</td>
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
}
</script>