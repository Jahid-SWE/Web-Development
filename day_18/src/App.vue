<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link to="" class="navbar-brand">LOGO</router-link>
        <ul class="navbar-nav">
          <li><router-link :to="{name: 'home'}" class="nav-link">Home</router-link></li>
          <li><router-link :to="{name: 'about', params:{id:10}}" class="nav-link">About</router-link></li>
          <li><router-link :to="{name: 'portfolio'}" class="nav-link">Portfolio</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {

}
</style>
