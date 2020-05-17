<template>
<div class="monthlyView">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <h1>Personal Finances</h1> -->
  <body>
    <pie-chart width="1000" height="300"
      id="monthlyViewChart"
      title="Monthly"
      type="pie"
      :labels=categories
      :data=data
      :background-color=colors
      ></pie-chart>

  </body>
</div>
</template>

<script>
import pieChart from '@/components/PieChart.vue'
export default {
  name: "monthlyView",
  components: {
    pieChart,
  },
  props: {
  },
  data() {
    return {
        categories: ["Gas", "Food", "Loans", "Groceries", "Rent"],
        data: [1, 2, 3, 4, 5],
        colors: ["#394E79", "#5E83BA", "#C2D2E9", "#9A8BA5", "#E3C5D5"],
    };
  }
};
</script>

<style scoped>
</style>
