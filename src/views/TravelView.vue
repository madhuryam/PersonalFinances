<template>
<div class="travelView">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <h1>Personal Finances</h1>
  <body>
    <pie-chart width="1000" height="300"
      id="expenditures-chart"
      title="Expenditures"
      type="pie"
      :labels='["Gas", "Food", "Loans", "Groceries", "Rent"]'
      :data='[4, 9, 3, 5, 6]'
      :background-color='["#394E79", "#5E83BA", "#C2D2E9", "#9A8BA5", "#E3C5D5"]'
      :border-color='white'
      ></pie-chart>

  </body>
</div>
</template>

<script>
import pieChart from '@/components/PieChart.vue'
export default {
  name: "travelView",
  components: {
    pieChart,
  },
  props: {
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
</style>
