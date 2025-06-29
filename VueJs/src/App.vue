<template>
  <div class="app-container">
    <nav>
      <ul>
        <li><router-link to="/users">User</router-link></li>
        <li><router-link to="/user-entities">UserEntities</router-link></li>
        <li><router-link to="/entities">Entités</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

nav {
  width: 200px;
  background-color: #2c3e50;
  padding: 20px;
  margin: 0;
  color: white;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin-bottom: 16px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
