<template>
   <nav class=" shadow-md">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/new-post">Add post</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NavBar'
});
</script>

<style>

</style>