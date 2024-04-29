<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: "App",
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
