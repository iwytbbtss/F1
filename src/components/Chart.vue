<template>
  <div class="chart">
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in list" :key="i">
          <td>{{ i+1 }}</td>
          <slot name="list" :row="row"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ChartComponent',
  props: {
    list: Array
  }
}
</script>

<style>
.chart {
  clear: both;
  background-color: beige;
}

.chart img {
  width: 50px;
  height: 50px;
}
</style>
