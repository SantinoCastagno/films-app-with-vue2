<template>
  <h1>Series</h1>
</template>

<script>
const axios = require("axios");

export default {
  async mounted() {
    //axios request with params
    const res = await axios.get("https://api.themoviedb.org/3/tv/popular", {
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

<style scoped></style>