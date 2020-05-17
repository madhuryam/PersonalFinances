<template>
<div class="travelView">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <a>Travel Section</a>
  <body>
    <!-- <div class="tabs is-boxed">
      <ul>
        <li v-bind:class="{'is-active': (visibleTab == 'Main')}" v-on:click="setVisibleTab('Main')">
          <a>Main View</a>
        </li>
        <li v-bind:class="{'is-active': (visibleTab == 'Monthly')}" v-on:click="setVisibleTab('Monthly')">
          <a>Monthly View</a>
        </li>
        <li v-bind:class="{'is-active': (visibleTab == 'Travel')}" v-on:click="setVisibleTab('Travel')">
          <a>Travel View</a>
        </li>
      </ul>
    </div> -->

    <pie-chart
      width="1000" height="300"
      id="travel-view-chart"
      title="travel"
      type="pie"
      :labels="categories"
      :data="data"
      :background-color="colors"
    ></pie-chart>


  </body>
</div>
</template>

<script>
import pieChart from "@/components/PieChart.vue";
export default {
  name: "travelView",
  components: {
    pieChart
  },
  props: {},
  data() {
    return {
      categories: ["Gas", "Food", "Loans", "Groceries", "Rent"],
      data: [12, 3, 51, 7, 6],
      colors: ["#394E79", "#5E83BA", "#C2D2E9", "#9A8BA5", "#E3C5D5"]
    };
  }
};
</script>

<style scoped>
a {
  color: rgba(222, 93, 132, 0.418)
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
