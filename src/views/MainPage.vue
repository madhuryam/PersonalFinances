<template>
<div class="mainPage">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Side Navbar -->
  <aside class="menu"><br /><br />
    <strong class="menu-label">Pages</strong><br /><br />
    <ul class="menu-list">
      <li>
        <a>Summary</a>
      </li><br /><br />
      <li>
        <a>Monthly Statements</a>
      </li><br /><br />
      <li>
        <a>Travel</a>
      </li>
    </ul>
  </aside>

  <!-- Main Body -->
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
  name: "mainPage",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: rgba(222, 93, 132, 0.418)
}
aside {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */

  top: 0;
  left: 0;
  background-color: rgba(222, 93, 132, 0.233);
}
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
pie-chart {
  height: 200px;
  width: 200px;
}
</style>
