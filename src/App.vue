<template>
  <home_page />
</template>

<script>
import home_page from "./components/home_page/home_page.vue";

export default {
  name: "App",
  components: {
    home_page,
  },
  mounted() {
    document.title = "CV - Tran Quoc Toan";
  },
};
</script>

<style>
body {
  text-align: -webkit-center;
  color: black;
  font-family: Calibri;
  background-image: url("assets/img/backgroud-cv.png");
}
</style>
