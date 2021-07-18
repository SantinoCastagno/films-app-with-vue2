<template>
  <a href="http://">Movies</a>
</template>

<script>
export default {
  name: "HomeButton",
  props: {
    buttonTitle: String,
  },
};
</script>

<style scoped>
a {
  position: relative;
  display: inline-block;
  padding: 15px;
  border: 2px solid;
}
</style>