<template>
  <div id="app">
    <nav class="bg-indigo-500 text-white text-lg">
      <div class="p-5">
        <router-link to="/" class="mx-3">Home</router-link>
        <router-link to="/jokes" class="mx-3">Jokes</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  methods:{
    ...mapActions([
      'setCurrentJoke'
    ])
  },
  mounted(){
    this.setCurrentJoke();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
