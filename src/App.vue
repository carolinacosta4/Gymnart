<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterLink :to="{name: 'dashboard'}">Dashboard</RouterLink>
  <RouterView />
</template>
