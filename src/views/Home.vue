<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <mainPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    mainPage
  }
}
</script>
