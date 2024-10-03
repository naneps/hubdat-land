<template>
  <nav>
    <RouterLink
      v-for="item in navbarItems"
      :key="item.id"
      :to="item.path"
      active-class="active"
      exact-active-class="exact-active"
    >
      {{ item.title }}
    </RouterLink>
  </nav>
</template>
<script lang="ts" setup>
import { useMainStore } from '@/stores/mainStore'
import { RouterLink } from 'vue-router'
const mainStore = useMainStore()
const navbarItems = mainStore.mainNavbarItems
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

nav a {
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
  margin: 0.5rem 0;
}

nav a.active {
  color: var(--color-active);
}

nav a.exact-active {
  color: var(--color-exact-active);
}
</style>
