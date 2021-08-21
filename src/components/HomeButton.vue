<template>
  <a href="http://">
    <span>
      <h4>{{ buttonTitle }}</h4>
    </span>
  </a>
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
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  padding: 1rem;
  border: 0.2rem solid #ededed;
  text-decoration: none;
  height: 10vh;
  width: 10vw;
}

h4 {
  font-size: 2.5rem;
}
</style>
