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
  background-color: #dbdbdb;
  margin-top: 30px;
  height: fit-content;
}

.chart img {
  width: 65px;
  height: 65px;
  object-fit: contain;
}

.chart tr, .chart th, .chart td {
  padding: 1vw;
}

.chart td:nth-of-type(2) {
  padding: 0;
}
</style>
