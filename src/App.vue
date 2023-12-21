<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterLink :to="{name: 'user'}">User Page</RouterLink>
    <RouterLink :to="{name: 'search'}">Search</RouterLink>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <RouterLink :to="{name: 'dashboard'}">Dashboard</RouterLink>
    <RouterLink :to="{name: 'favorites'}">Favorites</RouterLink>
    <RouterLink :to="{name: 'calendar'}">Calendar</RouterLink>
    <RouterLink :to="{name: 'quiz'}">Quiz</RouterLink>
  <RouterView />
</template>
