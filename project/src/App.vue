<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link to="" class="navbar-brand">LOGO</router-link>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainMenu">
          <ul class="navbar-nav ml-auto">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><router-link to="/about" class="nav-link">About</router-link></li>
            <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
            <li><router-link to="/details" class="nav-link">Details</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {

}
</style>
