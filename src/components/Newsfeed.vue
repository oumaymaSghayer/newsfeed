<template>
    <div class=" flex justify-center flex-wrap px-4">
        <PostCard  v-for="post in posts" :key="post.id" v-bind="post" />
    </div>
 </template>
 
 <script lang="ts">
 import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
 import PostCard from './PostCard.vue';
 export default defineComponent({
   name: 'NewsFeed',
   components:{
    PostCard
   },
   setup() {
    const store = useStore()
    const posts = computed(() => store.state.displayedPosts)
    return { posts }
  }
 });
 </script>
 
 <style>
 
 </style>