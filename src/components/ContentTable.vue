<template>
  <table>
    <thead>
      <th>Name</th>
      <th>Popularity</th>
      <th>Vote average</th>
      <th>Vote count</th>
    </thead>
    <tbody>
      <tr v-for="serie in series" :key="serie.id">
        <!-- <td><img src="{{}}" alt=""></td> -->
        <td>{{ serie.name }}</td>
        <td>{{ serie.popularity }}</td>
        <td>{{ serie.vote_average }}</td>
        <td>{{ serie.vote_count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  async mounted() {
    const axios = require("axios"),
      url = "https://api.themoviedb.org/3/";

    //axios request with params
    const res = await axios.get(url + "tv/popular", {
      params: {
        //Enviroment variables that start "VUE_APP" are loading automatically
        api_key: process.env.VUE_APP_API_KEY,
        language: "en-US",
      },
    });
    this.series = res.data.results;
    console.log(this.series);
  },

  data() {
    return {
      series: [],
    };
  },
};
</script>

<style scoped>
table {
  width: 80vw;
  border-collapse: collapse;
}

tr:nth-child(even) {
  background: #39a2db;
  color: whitesmoke;
}

th div {
  border-bottom: 2px solid black;
}

tr {
  height: 3.75rem;
}

td {
  padding: 1vh 2vw;
}
</style>
