<template>
<div class="monthlyView">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <h1>Personal Finances</h1> -->
  <body>

    <div class="summaryPage">
      <div class="tabs is-centered">
        <div class="topTabs">
          <ul>
            <li v-bind:class="{'is-active': (visibleTab == 'Summary')}" v-on:click="setVisibleTab('Summary')">
              <a>Summary</a>
            </li>
            <li v-bind:class="{'is-active': (visibleTab == 'Categorize')}" v-on:click="setVisibleTab('Categorize')">
              <a>Categorize</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="columns">

        <div class="column is-6">
          First column
          <div class="pieChart">
            <pie-chart
              width="1000"
              height="300"
              id="allTransactions"
              title="Full Summary"
              type="pie"
              :labels="categories"
              :data="data"
              :background-color="colors"
            ></pie-chart>
          </div>
        </div>

        <div class="column">
          Second column
          <label class="checkbox">
            <input type="checkbox" />
            Include Vacations
          </label>
          <label class="checkbox">
            <input type="checkbox" />
            Clump Reoccuring Payments
          </label>
          <label class="checkbox">
            <input type="checkbox" />
            Remove Reoccuring Payments
          </label>
        </div>

        <!-- <div class="column">
          Third column
          <div class="table-container">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Spotify</th>
                  <td>$5</td>
                </tr>
                <tr>
                  <th>Student Loans</th>
                  <td>$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->

      </div>


      <div class="columns">
        <div class="column">
          Third column
          <div class="table-container">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Spotify</th>
                  <td>$5</td>
                </tr>
                <tr>
                  <th>Student Loans</th>
                  <td>$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="column">
          Fourth column
          <pie-chart
            width="1000"
            height="300"
            id="categorizedTransactions"
            title="Categorized Summary"
            type="pie"
            :labels="categories"
            :data="data"
            :background-color="colors"
          ></pie-chart>
        </div>

      </div>

      <!-- <br /><br /><br /><br /><br /> -->

      
    </div>
  </body>
</div>
</template>

<script>
import pieChart from "@/components/PieChart.vue";
export default {
  name: "monthlyView",
  components: {
    pieChart
  },
  props: {},
  data() {
    return {
      categories: ["Gas", "Food", "Loans", "Groceries", "Rent"],
      data: [1, 2, 1, 2, 1],
      colors: ["#394E79", "#5E83BA", "#C2D2E9", "#9A8BA5", "#E3C5D5"],
      visibleTab: "Summary"
    };
  },
  methods: {
    setVisibleTab(tab) {
      this.visibleTab = tab;
      // EventBus.$emit('tabChanged', this.visibleTab)
    }
  }
};
</script>

<style scoped>
pieChart {
  float: left;
}
a {
  float: right;
  color: rgba(222, 93, 132, 0.418);
}
li {
  display: inline-block;
  margin: 0 10px;
}
.checkbox {
  display: block;
  /* text-align: left; */
}
.column{
  border-style: double;
  border-color: black;
}
.tabs {
  text-align: right;
  tabs-toggle-link-active-color: red;
}
.topTabs {
  margin-left: 390px;
}
.summaryPage {
  margin: "500px 100px 200px 300px";
}
.table {
  /* margin-left: 600px; */
}
</style>
