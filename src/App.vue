<script setup>
import Navigation from './components/Navigation.vue';
import Lablec from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<header>
  <Navigation />
</header>
<main>
  <RouterView />
</main>
<footer>
 <Lablec />
</footer>

</template>

<style scoped>

</style>
