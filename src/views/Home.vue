<template>
  <div>
    <h3>What are you looking for?</h3>
    <homeButton :buttonTitle="hola" />
  </div>
</template>

<script>
import homeButton from "../components/HomeButton.vue";
export default {
  name: "Home",
  components: { homeButton },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

h3 {
  font-size: 3rem;
  font-family: "Roboto", "Jorefin Sans", sans-serif;
}
</style>
