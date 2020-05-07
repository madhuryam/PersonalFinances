
<template>
  <!-- <canvas :width="width" :height="height" :id="id"></canvas> -->
  <canvas :id="id" :width="width" :height="height"></canvas>

</template>

<script>
import Chart from 'chart.js'

export default {

  props: ['id','width','height','type','title','labels','data', 'fill', 'backgroundColor', 'borderColor', 'borderWidth'],

  mounted() {

    new Chart(document.getElementById(this.id), {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.title,
            data: this.data,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: this.title,
          fontSize: 18,
        },
        legend: {
          labels: {
            boxWidth: 20,
            fontSize: 15,
          }
        }
        
      }
    });
  }
};
</script>

<style scoped>

</style>