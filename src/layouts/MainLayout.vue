<template>
  <div class="container">
    <main>
      <MainNavbar />
      <section>
        <RouterView />
      </section>
    </main>
  </div>
</template>
<script lang="ts" setup>
import MainNavbar from '@/components/MainNavbar.vue'
</script>
