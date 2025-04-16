<script setup>
import Navigation from './components/Navigation.vue';
import Lablec from './components/Footer.vue';
</script>

<template>
<header>
  <Navigation />
</header>
<main>
  <router-view />
</main>
<footer>
 <Lablec />
</footer>

</template>

<style scoped>

</style>
