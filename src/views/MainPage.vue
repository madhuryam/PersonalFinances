<template>
<div class="mainPage">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Top Navbar -->
  <!-- <nav class="navbar" role="navigation" area-label="dropdown navigation">
    <div class="navbar-item navbarcontent">
      <h1>Personal Finances</h1>
    </div>
    <div id="navMenu" class="navbar-menu">
      <a class = "navbar-link navbarcontent">
        About
      </a>
      <div class="navbar-dropdown is-right">
        <a class = "navbar-item">
          Version
        </a>
      </div>
    </div>
  </nav> -->

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
  <div class="tabs is-boxed">
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
  </div>

  <travel-page v-show="visibleTab === 'Travel'"></travel-page>

</div>
</template>

<script>
import EventBus from '../models/event-bus'
import travelPage from '@/views/TravelView.vue'

export default {
  name: "mainPage",
  components: {
    travelPage,
    // pieChart,
  },
  props: {
  },
  data() {
    return {
      visibleTab: 'Main',
    };
  },
  computed:{},
  mounted(){},
  methods:{
    setVisibleTab(tab){
      this.visibleTab = tab;
      EventBus.$emit('tabChanged', this.visibleTab)
    },
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
pie-chart {
  height: 200px;
  width: 200px;
}
.navbar{
  height: 40px;
  min-height: 40px;
}
@media all and (max-width: 1087px) {
  .navbar-menu .navbar-item .navbarcontent {
    background-color: white;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
