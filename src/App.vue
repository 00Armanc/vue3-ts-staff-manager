<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/header.vue'

export default defineComponent({
  name: "App",
  components: {
    Header
  },
})
</script>

<style>
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
