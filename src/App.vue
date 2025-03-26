<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import useScreenWidth from "./composables/useScreenWidth";
const [width, height] = useScreenWidth()
</script>

<template>
  <nav flex justify-between items-center>
    <RouterLink to="/">
      <h3 text-xl font-bold>
        Benjamin Gelb
      </h3>
    </RouterLink>
    <div flex gap-4>
      <RouterLink to="/about">
        <strong>
          About
        </strong>
      </RouterLink>
      <RouterLink to="/services">
        <strong>
          Services
        </strong>
      </RouterLink>
    </div>

  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
