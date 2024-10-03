<template>
  <nav>
    <div class="logo">Logo</div>
    <div class="nav-items">
      <RouterLink
        v-for="(item, index) in regularNavbarItems"
        :key="item.id"
        :to="item.path"
        :style="{ '--i': index }"
        active-class="active"
        exact-active-class="exact-active"
      >
        {{ item.title }}
      </RouterLink>

      <!-- Dropdown Navbar Items -->
      <div v-for="(item, index) in dropdownNavbarItems" :key="item.id" class="dropdown">
        <span>{{ item.title }}</span>
        <div class="dropdown-content">
          <RouterLink
            v-for="(child, childIndex) in item.children"
            :key="child.id"
            :to="child.path"
            :style="{ '--i': childIndex }"
            active-class="active"
            exact-active-class="exact-active"
          >
            {{ child.title }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useMainStore } from '@/stores/mainStore'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
const mainStore = useMainStore()
const regularNavbarItems = computed(() => {
  return mainStore.mainNavbarItems.filter((item) => !item.children)
})

const dropdownNavbarItems = computed(() => {
  return mainStore.mainNavbarItems.filter((item) => item.children && item.children.length > 0)
})
</script>

<style scoped>
:root {
  --color-text: #626262;
  --color-active: #f8f8f8;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #626262;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text);
}

.nav-items {
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
  margin: 0.5rem 1rem;
}

nav a.active {
  color: var(--color-active);
}

nav a.exact-active {
  color: var(--color-exact-active);
}
/* Dropdown styles */
/* Dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 0.5rem;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown .dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: scale(0.8);
  opacity: 0;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
}

.dropdown:hover .dropdown-content {
  display: block;
  transform: scale(1);
  opacity: 1;
}

/* Dropdown item styles */
.dropdown .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

/* Apply delay dynamically */
.dropdown .dropdown-content a {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown:hover .dropdown-content a {
  opacity: 1;
  transform: translateY(0);
}

.dropdown .dropdown-content a {
  transition-delay: calc(var(--i) * 0.1s);
}

/* On hover, animate each item dynamically */
.dropdown:hover .dropdown-content a {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  transition-delay: calc(var(--i) * 0.1s);
}

/* Add hover effect */
.dropdown .dropdown-content a:hover {
  background-color: #ddd;
}
</style>
