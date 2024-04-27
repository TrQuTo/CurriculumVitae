<template>
  <TqtoanCV />
</template>

<script>
import TqtoanCV from './components/tqtoan_cv.vue'

export default {
  name: 'App',
  components: {
    TqtoanCV
  },
  mounted() {
    document.title = "CV - Tran Quoc Toan";
  },
}

</script>

<style>
body {
  text-align: -webkit-center;
  color: black;
  font-family: Calibri;
  background-image: url("assets/img/backgroud-cv.png");
}
</style>
