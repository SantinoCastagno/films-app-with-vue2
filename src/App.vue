
<template>
  <div id="app">
    <div class=title >
      <h1>Films app with Vue 2</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
/*
  Colors palette
  kBlackColor:  #171717
  kGreyColor:   #444444
  kRedColor:    #DA0037
  kWhiteColor:  #EDEDED
*/
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');




body {
  overflow-x: hidden;
  overflow-y: hidden;

  font-family: 'Zen Loop', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;
  background: #444444;
  color: #EDEDED;

  font-size: 3rem;
}

#app {
  text-align: center;
}
</style>
