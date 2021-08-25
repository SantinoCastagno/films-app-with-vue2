<template>
  <header>
    <h2>Films app with Vue 2</h2>
    <nav>
      <ul>
        <li><router-link to="/series">series</router-link></li>
        <li><router-link to="/movies">movies</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

header {
  margin: 10px 0px;
  padding: 0px 20px;
  border-bottom: solid #053742;
  color: #053742;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
}

nav ul li {
  list-style: none;
}

ul {
  display: flex;
  flex-direction: row;
  border-left: 2px solid #053742;
  margin: 6px 20px;
  font-family: roboto;
  font-size: 1.4rem;
}

li {
  margin: 2px 6px;
  padding: 6px 12px;
}

a,
a:visited {
  color: #053742;
  text-decoration-color: #e8f0f2;
  transition-duration: 1s;
}

a:hover {
  text-decoration-color: #053742;
  transition-duration: 1s;
}
</style>
