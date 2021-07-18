<template>
  <a href="http://">
    <span> Movies </span>
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
  color: #fff;
  position: relative;
  display: inline-block;
  padding: 15px;
  border: 1px solid #ededed;

  text-decoration: none;
}

a:before {
  content: "";
  position: absolute;
  top: 0;
  left: -2px;
  width: calc(100%+4px);
  height: 100%;
  background: #fff;
}

a span {
  position: relative;
  z-index: 3;
}
</style>