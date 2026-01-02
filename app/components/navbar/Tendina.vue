<template>
  <section class="dropdown" @mouseenter="open = true" @mouseleave="open = false">
    <span class="dropdown-title">Servizi</span>
    <div v-show="open" class="dropdown-menu">
      <router-link to="/web" class="dropdown-alink">Sviluppo Web</router-link>
      <router-link to="/app" class="dropdown-alink">Sviluppo App</router-link>
      <router-link to="/seo" class="dropdown-alink">SEO</router-link>
    </div>
  </section>
</template>

<!-- /*////////////////////////////////////////*//*////////////////////////////////////////*//*////////////////////////////////////////*//*////////////////////////////////////////*/ -->

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<!-- /*////////////////////////////////////////*//*////////////////////////////////////////*//*////////////////////////////////////////*//*////////////////////////////////////////*/ -->

<style scoped>
.dropdown {
  position: relative;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown:hover {
  background-color: #444;
}

.dropdown-alink {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  text-decoration: none;
}

.dropdown-alink:hover {
  background-color: #555;
}

.dropdown-menu {
  position: absolute;
  top: 102%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #444;
  margin: 0;
  min-width: 150px;
  z-index: 10;
  border-radius: 4px;
}
</style>
