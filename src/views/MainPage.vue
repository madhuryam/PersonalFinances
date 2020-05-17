<template>
<div class="mainPage">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-center">
        <h1>Personal Finances</h1>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">

          <a class="navbar-item">
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Upload File(s)
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Upload File
              </a>
              <a class="navbar-item">
                Upload Folder
              </a>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  </nav>

  <!-- Side Navbar -->
  <aside><br /><br />
    <strong class="menu-label">Pages</strong><br /><br />
    <ul class="menu-list">
      <li v-bind:class="{'is-active': (visibleTab == 'Summary')}" v-on:click="setVisibleTab('Summary')">
        <a>Summary</a>
      </li><br /><br />
      <li v-bind:class="{'is-active': (visibleTab == 'Monthly')}" v-on:click="setVisibleTab('Monthly')">
        <a>Monthly Statements</a>
      </li><br /><br />
      <li v-bind:class="{'is-active': (visibleTab == 'Travel')}" v-on:click="setVisibleTab('Travel')">
        <a>Travel</a>
      </li>
    </ul>
  </aside>

  <!-- Main Body -->
  <div class="mainArea">
    <summary-page v-show="visibleTab === 'Summary'"></summary-page>
    <monthly-page v-show="visibleTab === 'Monthly'"></monthly-page>
    <travel-page v-show="visibleTab === 'Travel'"></travel-page>
  </div>

</div>
</template>

<script>
// import EventBus from '../models/event-bus'
import summaryPage from '@/views/SummaryView.vue'
import monthlyPage from '@/views/MonthlyView.vue'
import travelPage from '@/views/TravelView.vue'

export default {
  name: "mainPage",
  components: {
    summaryPage,
    monthlyPage,
    travelPage,
  },
  props: {
  },
  data() {
    return {
      visibleTab: 'Summary',
    };
  },
  computed:{},
  mounted(){},
  methods:{
    setVisibleTab(tab){
      this.visibleTab = tab;
      // EventBus.$emit('tabChanged', this.visibleTab)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: rgba(222, 93, 132, 0.418);
}
aside {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  top: 0;
  left: 0;
  background-color: rgba(222, 93, 132, 0.233);
  z-index: 1;
}
h1 { 
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; 
  font-size: 30px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 26px;
  color:rgb(39, 55, 109)
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
.mainArea{
  margin-left: 200px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
.navbar{
  z-index: 0;
}
.navbar-center{
  flex-grow: 1;
  padding-top: 15px;
  text-indent: 250px; /* text-indent: 50% */
}
  
</style>
