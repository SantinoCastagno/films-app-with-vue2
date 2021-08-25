<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
/*
  Colors palette
  kDarkBlue:    #053742
  kBlue:        #39A2DB
  kHeavenly:    #A2DBFA
  kWhiteColor:  #E8F0F2
*/
@import url("https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  overflow-y: hidden;

  font-family: "Zen Loop", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;
  background: #e8f0f2;
  color: #053742;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
