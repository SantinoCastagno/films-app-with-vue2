<template>
  <div class="home">
    <h3>What are you looking for?</h3>
    <div class="row">
      <homeButton buttonTitle="Movies" />
      <homeButton buttonTitle="Series" />
    </div>
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

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
