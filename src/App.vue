<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
export default {
  name: "App",
  mounted() {
    document.title = "CurriculumVitea";
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
