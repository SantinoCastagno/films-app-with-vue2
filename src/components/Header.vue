<template>
  <header>
    <h2>Films app with Vue 2</h2>
    <nav>
      <a href="Movies">movies</a>
      <a href="Series">series</a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  margin: 10px 0px;
  padding: 0px 20px;
  border-bottom: solid #39a2db;
  color: #39a2db;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  width: 96vw;
}

nav {
  display: flex;
}

a {
  text-decoration: none;
}
</style>