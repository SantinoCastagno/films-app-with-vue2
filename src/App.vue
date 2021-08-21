<template>
  <div id="app">
    <div class="header">
      <h1>Films app with Vue 2</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
const axios = require("axios");

export default {
  async mounted() {
    //axios request with params
    const res = await axios.get("https://api.themoviedb.org/3/tv/latest", {
      params: {
        //Enviroment variables that start "VUE_APP" are loading automatically
        api_key: process.env.VUE_APP_API_KEY,
        language: "en-US",
      },
    });
    console.log(res.data);
  },
};
</script>

<style>
/*
  Colors palette
  kBlackColor:  #171717
  kGreyColor:   #444444
  kRedColor:    #DA0037
  kWhiteColor:  #EDEDED
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
  background: #171717;
  color: #ededed;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin: 5vh 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid #da0037;
  font-size: 3rem;
  text-align: center;
  width: 40vw;
  height: 20vh;
  border-radius: 0.2;
}
</style>
