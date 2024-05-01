<template>
  <main>
    <header_page/>
    <RouterView/>
  </main>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import header_page from "./components/header_page/header_page.vue";
export default {
  name: "App",
  mounted() {
    document.title = "CurriculumVitea";
  },
  components: {
    header_page,
  },
};
</script>

<style>
body {
  text-align: -webkit-center;
  color: black;
  font-family: Calibri;
}
</style>
