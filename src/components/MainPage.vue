<template>
  <div class="mainPage">
    <h1>Personal Finances</h1>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <aside class="menu">
      <br><br>
      <p class="menu-label">
        Pages
      </p>
      <ul class="menu-list">
        <li><a>Summary</a></li>
        <li><a>Monthly Statements</a></li>
        <li><a>Travel</a></li>
      </ul>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'mainPage',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
aside {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 300px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  /* top: 0px;  */
  top: 0;
  left: 0;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #FFEFE2; /* Black */
  /* padding-top: 50px; */
  /* background-color: #f6f6f6; */
  /* height: 600px; */
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

</style>
